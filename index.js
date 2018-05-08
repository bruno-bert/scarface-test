/*this is a entry point that simualtes a call through cli tool
used only for testing purposes */


const path = require ('path');
const Loader = require('./Loader');

const directory = path.join(path.dirname(require.main.filename),'testapp');

const log = 'toConsole';

const pluginPrefix = 'scarface-';
const template = 'aspnetcore';
const pluginPath = pluginPrefix + template;

const params = {
    template : template,
    directory: directory,
    log: log
  };

const Generator = Loader.load('AspnetCoreGenerator', pluginPath);
new Generator(params).run();


 



