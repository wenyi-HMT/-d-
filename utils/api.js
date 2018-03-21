const API	= require('./base')

/**
 * 获取话题列表
 * @param  {object} args 参数
 * @return {promise}
 */
const queryTopics = function(data) {
  return API.get('/api2/topic.list.json?', data);
}

/**
 * 获取话题详情
 * @param  {int} id 话题id
 * @return {promise}
 */
const getTopic = function(id){
	return API.get('/api2/topic.get.json?id='+id);   
}

/**
 * 点赞
 * @param  {int} id 话题id
 * @return {promise}
 */
const like = function(id, type='topic'){
	if(type == 'topic'){
		return API.post('/api2/topic.like.json', {topic_id: id});  
	}else{
		return API.post('/api/mag.article.like.json', {post_id: id});  
	}
}

/**
 * 取消点赞
 * @param  {int} id 话题id
 * @return {Promise}
 */
const unlike = function (id, type='topic'){
	if(type == 'topic'){
		return API.post('/api2/topic.unlike.json', {topic_id: id});
	}else{
		return API.post('/api/mag.article.unlike.json', {post_id: id}); 
	}
	   
}

/**
 * 收藏
 * @param  {int} id 话题id
 * @return {promise}
 */
const fav = function (id, type='topic'){
	if(type == 'topic'){
		return API.post('/api2/topic.fav.json', {topic_id: id});
	}else{
    return API.post('/api/mag.product.fav.json', {post_id: id});  
	}
}

/**
 * 取消收藏
 * @param  {int} id 话题id
 * @return {promise}
 */
const unfav = function (id, type='topic'){
	if(type == 'topic'){
		return API.post('/api2/topic.unfav.json', {topic_id: id});
	}else{
    return API.post('/api//mag.product.unfav.json', {post_id: id});  
	}
}

/**
 * 创建帖子
 * @param  {object} args 参数
 * @return {promise}
 */
const createTopic = function (data) {
  console.log(data)
  return API.post('/api2/topic.create.json', data);
}
/**
 * 创建评论
 * @param  {object} args 参数
 * @return {promise}
 */
const createReply = function (data, type='topic'){
	if(type == 'topic'){
		return API.post('/api2/reply.create.json', data);
	}else{
		return API.post('/api/mag.article.reply.json', data); 
	}
}

/**
 * 删除评论
 * @param  {int} id 评论id
 * @return {promise}
 */
const deleteReply = function (id, type='topic'){
	if(type == 'topic'){
		return API.post('/api2/reply.delete.json', {id: id});
	}else{
		return API.post('/api/mag.article.unreply.json', {id: id});  
	} 
}

/**
 * 投票
 * @param {number} topic_id 话题id
 * @param {string} key 选项key
 * @return {Promise}
 */
const vote = function (id, key){
	return API.post('/api2/topic.vote.json', {topic_id: id, key: key});
}

/**
 * 获取收藏列表
 * @param  {object} args<{cursor}>
 * @return {promise}
 */
const queryFavList = function(data) {
	return API.get('/api2/fav.list.json', data);
}

/**
 * 获取用户信息
 * @return {Promise}
 */
const getProfile = function() {
	return API.get('/api2/user.profile.json');
}

/**
 * 签到
 * @return {Promise}
 */
const checkin = function() {
	return API.get('/api2/user.checkin.json');
}

/**
 * 我的消息列表
 * @param  {object} args<{cursor}>
 * @return {promise}
 */
const queryNotificationList = function(data) {
	return API.get('/api2/notification.list.json', data);
}


/**
 * 用户积分统计
 * @param  {object} args
 * @return {Promise}
 */
const queryCreditList = function(data) {
	return API.get('/api2/credit.list.json', data);
}

/**
 * 获取文章详情
 * @param  {int} id 文章id
 * @return {promise}
 */
const getArticle = function(id){
	return API.get('/api/mag.article.get.json?id='+id);   
}

API.queryTopics				= queryTopics
API.getTopic				= getTopic
API.getArticle				= getArticle
API.queryFavList			= API.guard(queryFavList)
API.queryNotificationList	= API.guard(queryNotificationList)
API.queryCreditList			= API.guard(queryCreditList)
API.like					= API.guard(like)
API.unlike					= API.guard(unlike)
API.fav						= API.guard(fav)
API.unfav					= API.guard(unfav)
API.vote					= API.guard(vote)
API.createReply				= API.guard(createReply)
API.deleteReply				= API.guard(deleteReply)
API.getProfile				= API.guard(getProfile)
API.checkin					= API.guard(checkin)
API.createTopic = API.guard(createTopic)
module.exports = API