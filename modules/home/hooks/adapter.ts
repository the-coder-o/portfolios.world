export const getUserProfiles = (items: any[] = []) => {
  return items.map((item) => ({
    _id: item?._id ?? '',
    name: item?.name ?? '',
    email: item?.email ?? '',
    username: item?.username ?? '',
    isDeleted: item?.is_deleted ?? false,
    workHistory: Array.isArray(item?.work_history) ? item.work_history : [],
    socialUrls: Array.isArray(item?.social_url) ? item.social_url : [],
    createdAt: item?.created_at ?? '',
    updatedAt: item?.updated_at ?? '',
    banner: item?.banner ?? '',
    avatar: item?.avatar ?? '',
    bio: item?.bio ?? '',
    location: item?.location ?? '',
    role: item?.role ?? '',
    websiteUrl: item?.website_url ?? '',
  }))
}
