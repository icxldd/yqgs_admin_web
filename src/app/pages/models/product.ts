export interface Product {
    id?:string;
    code?:string;
    name?:string;
    description?:string;
    price?:number;
    quantity?:number;
    inventoryStatus?:string;
    category?:string;
    image?:string;
    rating?:number;
}



export interface Post {
    postId?:string;
    title?:string;
    description?:string;
    avatarUrl?:string;
    actionUrl?:number;
    status?:number;
    createdDate?:string;
}


/*

PostId = Post.Id,
                Title = WebUtility.UrlDecode(Post.Title),
                Description = WebUtility.UrlDecode(Post.Description),
                AvatarUrl = Post.AvatarUrl,
                ActionUrl = Post.ActionUrl,
                Status = Post.Status,
                StatusMessage = Post.StatusMessage,
                CreatorId = Post.CreatorAuthId.ToString(),
                Creator = creator,
                CreatorMemberId = Post.CreatorMemberId.ToString(),
                IsCurrentCreator = isCurrentCreator,
                CreatedDate =

*/