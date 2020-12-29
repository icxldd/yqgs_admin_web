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
    isCanNewJoin:boolean
}

export class guildMemberAdminDto {


    guildId:string
    guildName:string
    guildAvatarUrl:string
    guildAddress:string
    guildMembersCount:string

    guildMembersDto:guildMemberDto[]
}




export class accountAdminDto {
    userAuthId:string
    nickName:string
    avatarUrl:string
    ownerGuildCount:number
    joinGuildCount:number
    isCloudChurchAdmin:boolean
    lastUsingGuildId:string
    userCreatedTime:string
    notificationPublishCount:number
    discussPublishCount:number
    livecastPublishCount:number
    violationCount:number
    phoneNumber:string
}

export class guildMemberDto {
    memberId:string
    guildId:string
    nickname:string
    avatarUrl:string
    phoneNumber:string
    role:boolean// 角色。（0: 信徒; 1: 同工; 2: 牧者）
    status:number// 状态。（-3：已拒绝; -2: 已屏蔽; -1: 已退出; 0: 正常; 1: 等待审核; 2: 已邀请等待加入）
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


export class notificationDto {
    notificationId:string
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