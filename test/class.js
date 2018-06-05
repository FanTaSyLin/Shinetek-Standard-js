/**
 * @class
 * @desc 创建一个点
 * @param {number} x - x坐标值
 * @param {number} y - y坐标值
 */
class Point {
  /**
   * @desc 创建一个点
   * @param {number} x - x坐标值
   * @param {number} y - y坐标值
   */
  constructor(x, y) {
    this.x = x
    this.y = y
    /**
     * 获取 point 的字符串
     * @returns {string}
     */
    this.toString = function () {
      return '(' + this.x + ', ' + this.y + ')'
    }
    /**
     * 获取 x坐标值
     * @returns {number}
     */
    this.getX = function () {
      return this.x
    }
  }
}

var p = new Point()

console.log(p.toString())

console.log(p.getX())
