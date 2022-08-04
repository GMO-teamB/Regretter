class TwittersController < ApplicationController

  def tweet
    client = Twitter::REST::Client.new do |config|
      config.consumer_key        = ENV["YOUR_CONSUMER_KEY"]    # API Key
      config.consumer_secret     = ENV["YOUR_CONSUMER_SECRET"] # API Secret Key
      config.access_token        = ENV["YOUR_ACCESS_TOKEN"]    # Access Token
      config.access_token_secret = ENV["YOUR_ACCESS_SECRET"]   # Access Token Secret
    end
    time = Time.now
    str_out = "今日あなたは運動しませんでした。今日という日は戻ってきません。あなたの醜態を晒します。#{time}"

    # 画像URLを指定して投稿する場合
    open('https://www.glamorous-store.com/topic/wp-content/uploads/2020/06/na4.jpg') do |tmp|
      client.update_with_media(str_out, tmp)
    end
  end
end
