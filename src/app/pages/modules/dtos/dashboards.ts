export class GuildDto {
    GuildId:string
    DisplayName:string
    Description:string
    AvatarUrl:string
    CoverUrl:string
    HasAudited:boolean//是否审核
    Address:string
    IsPublic:boolean
    JoinMode:number// 加入群组的方式。（0: 不允许加入; 1: 需要所有者或管理员同意; 2: 直接加入）
    Status:number// 状态。（-3: 已解散; -2: 已屏蔽; -1: 已删除; 0: 正常; 1: 等待审核）
    OwnerId:string
    ViolationCount:number// 违规次数。
    MembersCount:number//成员人数
}

export class livecastDto {
    LivecastId:string
    GuildId:string
    Title:string
    AvatarUrl:string
    RtmpPlayUrl:string
    RecordUrl:string
    Status:number //状态。（-2: 已屏蔽; -1: 已删除; 0: 进行中; 1: 未开始; 2: 已结束; 3: 已中断）
    CreatorId:string
    CreatedDate:string
    BeginDate:string
    EndDate:string
    ViewedReceiversCount:number
    UnviewedReceiversCount:number
}


export class discussDto {
    DiscussId:string
    GuildId:string
    Title:string
    AvatarUrl:string
    Status:number //状态。（-2: 已屏蔽; -1: 已删除; 0: 进行中; 1: 未开始; 2: 已结束; 3: 已中断）
    CreatorId:string
    CreatedDate:string
    BeginDate:string
    EndDate:string
    ViewedReceiversCount:number// 已查看
    UnviewedReceiversCount:number//未查看人数
}