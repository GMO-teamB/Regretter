class ReactFrontController < ApplicationController
  def react
    render file: 'public/app/index.html', layout: false, content_type: 'text/html'
  end
end
