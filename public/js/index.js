
    let modal = document.querySelector(".modal-wrapper");
    let pfPics = document.querySelectorAll(".pf-wrap > .pf > img");
function moveHeader(){
   let scrollTop =document.documentElement.scrollTop;
 
   if (scrollTop > 200) {
    $('.header-wrapper').css('transform', 'translateY(-100%)')
    $('.header-wrapper').css('transform')
    $('.header-wrapper').addClass('active')
    $('.header-wrapper').css('transform', 'translateY(0)')
} else {
    $('.header-wrapper').css('transform', 'translateY(0)')
    $('.header-wrapper').removeClass('active')
}
}

function toggleNavi(){
    document.querySelector(".mb-navi-wrapper").classList.toggle('active');
}
function openModal(){
    let src = this.getAttribute("src");
    let modalImg = document.querySelector(".modal-wrap .modal-img");
    let modalWrap = document.querySelector(".modal-wrap");
    modalImg.setAttribute("src",src);
    modal.style.display = "block";
    modalWrap.style.transform = "scale(0)";
    modalWrap.style.transform = "scale(1)";
    console.log(this);
 
}


pfPics.forEach((pfPics) => {
    pfPics.addEventListener('click',openModal);
  });
  
function closeModal(){
    modal.style.display = "none";
}

var cols = document.querySelectorAll('#cols .btn');  
		
		[].forEach.call(cols,function(col){
			col.addEventListener("click",click,false); 
		});

		function click(e){
			window.alert(this.innerHTML);
		}



window.addEventListener('scroll', moveHeader);
document.querySelector(".mb-bars").addEventListener('click',toggleNavi);
modal.addEventListener('click',closeModal);

