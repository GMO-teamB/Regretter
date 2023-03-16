class UsersController < ApplicationController
  def index
    user = User.find(3)
    if user.exist?
    render json: {
      user: user.map{user.id | user.sex| user.weight| user.age}
    }, status: :ok
    else
    render json: {}, status::no_content
  end

  def create
    set_users(@user)
    if @data.save
        render json: {
          user: @data
        }, status: :created
    else
      render json: {}, status: :internal_server_error
    end    
  end
  def set_users(user)
    @data = user
    @data.attributes={
        sex: params[:sex],
        weight: params[:weight]
        age: params[:age]
  }
  end
  
  
  def update

    # 最終的にredirect_to '/'にする
  end

end
