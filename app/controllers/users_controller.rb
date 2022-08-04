class UsersController < ApplicationController
  def index
    byebug
    @user = User.find(3)

    render json: {
      user: @user
    }, status: :ok
  end

  def update

    # 最終的にredirect_to '/'にする
  end

end
