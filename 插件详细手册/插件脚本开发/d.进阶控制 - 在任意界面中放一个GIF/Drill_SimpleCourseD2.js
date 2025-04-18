//=============================================================================
// Drill_SimpleCourseD2.js
//=============================================================================

/*:
 * @plugindesc [v1.0]        脚本教学 - 课程d2
 * @author Drill_up
 *
 * @help
 * =============================================================================
 * +++ Drill_SimpleCourseD2 +++
 * 作者：Drill_up
 * =============================================================================
 * 课程：在地图界面中放一个贴图。
 * 
 * 
 *   >> 代码 - 资源文件参数部分
 * （在这部分写课程提供的脚本内容）
 * 
 * 
 * -----------------------------------------------------------------------------
 * ----更新日志
 * [v1.0]
 * 完成插件ヽ(*。>Д<)o゜
 * 
 */
 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//		插件简称		SCD2（Simple_Course_D）
//		临时全局变量	无
//		临时局部变量	无
//		存储数据变量	无
//		全局存储变量	无
//		覆盖重写方法	无
//
//<<<<<<<<性能记录<<<<<<<<
//
//		★工作类型		无
//		★时间复杂度		无
//		★性能测试因素	无
//		★性能测试消耗	无
//		★最坏情况		无
//		★备注			无
//		
//		★优化记录		无
//		
//<<<<<<<<插件记录<<<<<<<<
//		
//		★大体框架与功能如下：
//			课程d2：
//				->贴图创建脚本
//				->GIF播放
//				->战斗界面结构
//
//		★必要注意事项：
//			1.这节课学完了就不要跑去自己写插件了，还有很多坑没讲，不要急。
//
//		★其它说明细节：
//			暂无
//			
//		★存在的问题：
//			暂无
//			

//=============================================================================
// ** 静态数据
//=============================================================================
	var Imported = Imported || {};					//导入识别类
	Imported.Drill_SimpleCourseD2 = true;			//导入的插件标记
	var DrillUp = DrillUp || {}; 											//临时全局变量中转类
	DrillUp.parameters = PluginManager.parameters('Drill_SimpleCourseD2');	//读取插件管理器中的数据
	
	
	//  >> 静态数据部分
	// （在这部分写课程的脚本内容）
	
	
	
//=============================================================================
// ** 资源文件夹
//=============================================================================
ImageManager.load_CourseD = function(filename) {
	return this.loadBitmap('img/Course__D/', filename, 0, true);     
};


//=============================================================================
// ** 战斗界面
//=============================================================================
//==============================
// * 贴图 - 创建
//==============================

//  >> 贴图创建部分
// （在这部分写课程的脚本内容）
	

//==============================
// * 贴图 - 帧刷新
//==============================

//  >> 贴图帧刷新部分
// （在这部分写课程的脚本内容）
	
	


