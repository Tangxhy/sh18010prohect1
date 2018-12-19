require(["../scripts/config.js"],function() {
	require(["common","fontscroll","jquery","swiper"],function (com,font,$,Swiper) {
		
		
		
		/*====================轮播图插件特效========================*/
		 var mySwiper = new Swiper ('.swiper-container', {
			    //direction: 'vertical', // 垂直切换选项
			    //loop: true, // 循环模式选项
			    autoplay:true,
			    
			    // 如果需要分页器
			    pagination: {
			      el: '.swiper-pagination',
			      clickable :true,//点击
			    },
			    
			    // 如果需要前进后退按钮
			    navigation: {
			      nextEl: '.swiper-button-next',
			      prevEl: '.swiper-button-prev',
			    },
			    
			    // 如果需要滚动条
//			    scrollbar: {
//			      el: '.swiper-scrollbar',
//			    },
       }) 
       
       
//           固定定位

        /*============滚动显示顶部按钮，滚动条顶部距离为零消失============*/
	       $(window).scroll(function(){
	       	   var scrollTop=$(this).scrollTop()
	       	   if(scrollTop>0){
	       	   	$("#pos li:last").fadeIn(500);
	       	   }else{
	       	   	 $("#pos li:last").fadeOut(500);
	       	   }
	       	
	       })
       
        /*================点击顶部按钮回到滚动条回到顶部================ */
			$("#pos li:last").click(function() {
				$("html").animate({scrollTop: 0}, 500);
			})
		
		
        /*=======================百度热搜词============================*/



        /*========================商品栏特效===========================*/	
		$(function(){

			$("#shop  ul li:nth-child(1)").hover(function(){
				$("#shop  ul li:nth-child(1) img").stop().animate({"width":"160px","height":"160px"})
			}, function(){
				$("#shop  ul li:nth-child(1) img").stop().animate({"width":"140px","height":"140px"})
			});
			$("#shop  ul li:nth-child(1)").hover(function(){
				$("#shop  ul li:nth-child(1) .qiang").stop().animate({"top":"220px"})
			}, function(){
				$("#shop  ul li:nth-child(1) .qiang").stop().animate({"top":"260px"})
			});
			$("#shop  ul li:nth-child(1)").hover(function(){
				$("#shop  ul li:nth-child(1) .money").css({"display":"none"})
			}, function(){
				$("#shop  ul li:nth-child(1) .money").css({"display":"block"})
			});
			
			
			$("#shop  ul li:nth-child(2)").hover(function(){
				$("#shop  ul li:nth-child(2) img").stop().animate({"width":"160px","height":"160px"})
			}, function(){
				$("#shop  ul li:nth-child(2) img").stop().animate({"width":"140px","height":"140px"})
			});
			$("#shop  ul li:nth-child(2)").hover(function(){
				$("#shop  ul li:nth-child(2) .qiang").stop().animate({"top":"220px"})
			}, function(){
				$("#shop  ul li:nth-child(2) .qiang").stop().animate({"top":"260px"})
			});
			$("#shop  ul li:nth-child(2)").hover(function(){
				$("#shop  ul li:nth-child(2) .money").css({"display":"none"})
			}, function(){
				$("#shop  ul li:nth-child(2) .money").css({"display":"block"})
			});
			
			$("#shop  ul li:nth-child(3)").hover(function(){
				$("#shop  ul li:nth-child(3) img").stop().animate({"width":"160px","height":"160px"})
			}, function(){
				$("#shop  ul li:nth-child(3) img").stop().animate({"width":"140px","height":"140px"})
			});
			$("#shop  ul li:nth-child(3)").hover(function(){
				$("#shop  ul li:nth-child(3) .qiang").stop().animate({"top":"220px"})
			}, function(){
				$("#shop  ul li:nth-child(3) .qiang").stop().animate({"top":"260px"})
			});
			$("#shop  ul li:nth-child(3)").hover(function(){
				$("#shop  ul li:nth-child(3) .money").stop().css({"display":"none"})
			}, function(){
				$("#shop  ul li:nth-child(3) .money").stop().css({"display":"block"})
			});
			
			
			$("#shop  ul li:nth-child(4)").hover(function(){
				$("#shop  ul li:nth-child(4) img").stop().animate({"width":"160px","height":"160px"})
			}, function(){
				$("#shop  ul li:nth-child(4) img").stop().animate({"width":"140px","height":"140px"})
			});
			$("#shop  ul li:nth-child(4)").hover(function(){
				$("#shop  ul li:nth-child(4) .qiang").stop().animate({"top":"220px"})
			}, function(){
				$("#shop  ul li:nth-child(4) .qiang").stop().animate({"top":"260px"})
			});
			$("#shop  ul li:nth-child(4)").hover(function(){
				$("#shop  ul li:nth-child(4) .money").css({"display":"none"})
			}, function(){
				$("#shop  ul li:nth-child(4) .money").css({"display":"block"})
			});
			
			
			$("#shop  ul li:nth-child(5)").hover(function(){
				$("#shop  ul li:nth-child(5) img").stop().animate({"width":"160px","height":"160px"})
			}, function(){
				$("#shop  ul li:nth-child(5) img").stop().animate({"width":"140px","height":"140px"})
			});
			$("#shop  ul li:nth-child(5)").hover(function(){
				$("#shop  ul li:nth-child(5) .qiang").stop().animate({"top":"220px"})
			}, function(){
				$("#shop  ul li:nth-child(5) .qiang").stop().animate({"top":"260px"})
			});
			$("#shop  ul li:nth-child(5)").hover(function(){
				$("#shop  ul li:nth-child(5) .money").css({"display":"none"})
			}, function(){
				$("#shop  ul li:nth-child(5) .money").css({"display":"block"})
			});

		})
		
		


		
		
		
		
		
		
	})
})










