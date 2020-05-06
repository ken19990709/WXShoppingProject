// components/w-detai-box.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item:{
      type:Object,
      value:[]
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    price:200,
    star:50

  },
  
 
  

  /**
   * 组件的方法列表
   */
  methods: {
    
    "initial":function(){console.log(Math.random()*400);
      this.setData({
        
        price:(Math.ceil(Math.random()*400)+100),
        star:(Math.ceil(Math.random()*200)+10)
      }
      )
    }
  

  }
})
