class PostsController < ApplicationController
	# http_basic_authenticate_with name: "dhh", password: "secret", except: [:index, :show]

	def new
		@post = Post.new #googled this line, otherwise errors show
	end

	def create
		# render text: params[:post].inspect
		@post = Post.new(post_params) #receives the new information
		if @post.save
		    redirect_to @post
		 else
		    render 'new'
  		end
	end
	
	def show
  		@post = Post.find(params[:id])
	end

	def index
	  	@posts = Post.all
	end
	
	def edit
		@post = Post.find(params[:id])
	end

	def update
	 	@post = Post.find(params[:id])
	 
		if @post.update(params[:post].permit(:title, :text))
			redirect_to @post
		else
			render 'edit'
		end
	end

	def destroy
		@post = Post.find(params[:id])
		@post.destroy

		redirect_to posts_path
	end
	
	private
	  	def post_params
	    	params.require(:post).permit(:title, :text)
	  	end
end
