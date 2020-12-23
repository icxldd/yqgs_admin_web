export class GuildDto {
    guildId:string
    displayName:string
    description:string
    avatarUrl:string
    coverUrl:string
    hasAudited:boolean//是否审核
    address:string
    isPublic:boolean
    joinMode:number// 加入群组的方式。（0: 不允许加入; 1: 需要所有者或管理员同意; 2: 直接加入）
    status:number// 状态。（-3: 已解散; -2: 已屏蔽; -1: 已删除; 0: 正常; 1: 等待审核）
    ownerId:string
    violationCount:number// 违规次数。
    membersCount:number//成员人数
}

export class livecastDto {
    livecastId:string
    guildId:string
    title:string
    avatarUrl:string
    rtmpPlayUrl:string
    hlsPlayUrl:string
    recordUrl:string
    status:number //状态。（-2: 已屏蔽; -1: 已删除; 0: 进行中; 1: 未开始; 2: 已结束; 3: 已中断）
    creatorId:string
    createdDate:string
    beginDate:string
    endDate:string
    viewedReceiversCount:number
    unviewedReceiversCount:number
}


export class discussDto {
    discussId:string
    guildId:string
    title:string
    avatarUrl:string
    status:number //状态。（-2: 已屏蔽; -1: 已删除; 0: 进行中; 1: 未开始; 2: 已结束; 3: 已中断）
    creatorId:string
    createdDate:string
    beginDate:string
    endDate:string
    viewedReceiversCount:number// 已查看
    unviewedReceiversCount:number//未查看人数
}