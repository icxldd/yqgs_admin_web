/*
  /// <summary>
        ///     文件编号。
        /// </summary>
        [DataMember(Order = 1)]
        public string FileId { get; set; }

        /// <summary>
        ///     教会编号。
        /// </summary>
        [DataMember(Order = 2)]
        public string GuildId { get; set; }

        /// <summary>
        ///     教会信息。
        /// </summary>
        [DataMember(Order = 3)]
        public GuildDto Guild { get; set; }

        /// <summary>
        ///     对象编号。
        /// </summary>
        [DataMember(Order = 4)]
        public string ItemId { get; set; }

        /// <summary>
        ///     对象信息。
        /// </summary>
        [DataMember(Order = 5)]
        public AuditableItemDto Item { get; set; }

        /// <summary>
        ///     类型。（-1: 其他; 0: 图片; 1: 音频; 2: 视频; 3: 文档）
        /// </summary>
        [DataMember(Order = 6)]
        public int Type { get; set; }

        /// <summary>
        ///     名称。
        /// </summary>
        [DataMember(Order = 7)]
        public string Name { get; set; }

        /// <summary>
        ///     地址。
        /// </summary>
        [DataMember(Order = 8)]
        public string Url { get; set; }

        /// <summary>
        ///     预览地址。
        /// </summary>
        [DataMember(Order = 9)]
        public string PreviewUrl { get; set; }

        /// <summary>
        ///     标识图片地址。
        /// </summary>
        [DataMember(Order = 10)]
        public string AvatarUrl { get; set; }

        /// <summary>
        ///     内容类型。
        /// </summary>
        [DataMember(Order = 11)]
        public string ContentType { get; set; }

        /// <summary>
        ///     内容长度。
        /// </summary>
        [DataMember(Order = 12)]
        public int? ContentLength { get; set; }

        /// <summary>
        ///     宽度。
        /// </summary>
        [DataMember(Order = 13)]
        public int? Width { get; set; }

        /// <summary>
        ///     高度。
        /// </summary>
        [DataMember(Order = 14)]
        public int? Height { get; set; }

        /// <summary>
        ///     时长。（单位：秒）
        /// </summary>
        [DataMember(Order = 15)]
        public float? Duration { get; set; }

*/

import { GuildDto } from "./dashboards"

export class userDto{
    userId:string
    displayName:string
    avatarUrl:string
    createdDate:string
    violationCount:number
    defaultUsingGuildId:string
    defaultUsingGuildName:string

}

export class auditableItemDto{
    itemId:string
    guildId:string
    guild:GuildDto
    type:number
    typeName:string
    title:string
    description:string
    avatarUrl:string
    status:number
    statusName:string
    statusMessage:string
    hasAudited:boolean
    auditMessage:string
    auditDescription:string
    auditorId:string
    auditor:userDto
    auditDate:string
    userId:string
    user:userDto
    isCurrentUser:boolean
    createdDate:string
    blockedDate:string
    imageFiles:auditableItemFileDto[]
    audioFiles:auditableItemFileDto[]
    videoFiles:auditableItemFileDto[]
    attachmentFiles:auditableItemFileDto[]

}
export class userFeedbackDto{
    feedbackId:string
    userId:string
    description:string
    createdDate:string
    isReplied:boolean
    repliedDescription:string
    repliedDate:string
    replierId:string
}

export class abuseReportDto{
    reportId:string
    itemId:string
    item:auditableItemDto
    category:string
    description:string
    createdDate:string
}


export class fileBasicDto {
    fileId:string
    guildId:string
    guild:GuildDto
    type:number
    name:string
    url:string
    previewUrl:string
    avatarUrl:string
    contentType:string
    contentLength:number
    width:number
    height:number
    duration:number
}


export class auditableItemFileDto extends fileBasicDto{
    itemId:string
}



