class UsersController < ApplicationController
  before_action :authenticate_user! 
  def index
    @user = User.find(3)

    render json: {
      user: @user
    }, status: :ok
  end

  def update

    # 最終的にredirect_to '/'にする
  end

end
