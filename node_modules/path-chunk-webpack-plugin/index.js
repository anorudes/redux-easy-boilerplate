/*
 MIT License http://www.opensource.org/licenses/mit-license.php
 Author Daniel Tschinder @danez
 */
var nextIdent = 0;

function PathChunkPlugin(options) {
  this.chunkName = options.name;
  this.filenameTemplate = options.filename;
  this.ignore = options.ignore || [];
  // ignore chunk "main" by default as this is the name of chunk coming from worker-loader
  this.ignoreChunks = options.ignoreChunks || ['main'];
  this.ident = __filename + (nextIdent++);

  if (!this.chunkName) {
    throw new Error('Supplying a name is mandatory for path-chunk-webpack-plugin');
  }

  if (!Array.isArray(this.ignore)) this.ignore = [this.ignore];
  if (!Array.isArray(this.ignoreChunks)) this.ignoreChunks = [this.ignoreChunks];

  if (typeof options.test === 'function') {
    this.test = options.test;
  } else if (typeof options.test === 'string') {
    this.test = function (userRequest) { return userRequest.indexOf(options.test) >= 0; };
  } else if (options.test instanceof RegExp) {
    this.test = options.test.test;
  } else {
    throw new Error('Invalid test supplied to path-chunk-webpack-plugin');
  }
}

module.exports = PathChunkPlugin;
PathChunkPlugin.prototype.apply = function (compiler) {
  var filenameTemplate = this.filenameTemplate;
  var chunkName = this.chunkName;
  var ident = this.ident;
  var ignore = this.ignore;
  var ignoreChunks = this.ignoreChunks;
  var isModuleMatching = this.test;

  compiler.plugin('compilation', function (compilation) {
    compilation.plugin('optimize-chunks', function (chunks) {
      // only optimize once
      if (compilation[ident]) return;
      compilation[ident] = true;

      var pathChunk = chunks.find(function (chunk) {
        return chunk.name === chunkName;
      });

      if (!pathChunk) {
        pathChunk = this.addChunk(chunkName);
        pathChunk.initial = pathChunk.entry = true;
      }

      var usedChunks = chunks.filter(function (chunk) {
        return chunk !== pathChunk && ignoreChunks.indexOf(chunk.name) === -1;
      });

      var commonModules = [];
      var addCommonModule = function (module) {
        if (!module.userRequest) return;

        for (var i in ignore) {
          if (module.userRequest.indexOf(ignore[i]) >= 0) return;
        }
        if (commonModules.indexOf(module) < 0 && isModuleMatching(module.userRequest)) {
          commonModules.push(module);
        }
      };

      usedChunks.forEach(function (chunk) {
        chunk.modules.forEach(addCommonModule);
        chunk.parents = [pathChunk];
        pathChunk.chunks.push(chunk);
        if (chunk.entry) {
          chunk.entry = false;
        }
      });

      commonModules.forEach(function (module) {
        usedChunks.forEach(module.removeChunk.bind(module));
        pathChunk.addModule(module);
        module.addChunk(pathChunk);
      });

      if (filenameTemplate) {
        pathChunk.filenameTemplate = filenameTemplate;
      }

      this.restartApplyPlugins();
    });
  });
};
