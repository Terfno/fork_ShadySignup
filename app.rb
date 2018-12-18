require 'sinatra'
require 'sinatra/reloader'
require 'haml'
require 'sass'

get '/' do
    haml :index
end
