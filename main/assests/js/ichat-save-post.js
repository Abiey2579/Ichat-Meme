$(document).ready(function () {
    $('.SavePost').on('click', function () {
        $('.PostDropdownOption').hide();

        $('.PostContent').css('padding', '10px 0 0 0');
        $('.PostContent .PostHeaderAligner').css('margin','-26px 0 0 0'); 
        $('.PostContent .PostUserCheck').css('margin','-20px 0 0 0');
        $('.MainPostText, .ReplyPostText').css('margin','-36px 0 0 0');
        $('.MainPostPictureContainer, .ReplyPostPictureContainer').css('margin','40px 0 0 0');

       html2canvas($('.PostContent')[0],
        {
            allowTaint: true,
            useCORS: true
        }
        ).then(function (canvas) {
            var anchorTag = document.createElement("a");
            document.body.appendChild(anchorTag);
            anchorTag.download = 'iMemes.jpg';
            anchorTag.href = canvas.toDataURL();
            anchorTag.target = '_blank';
            anchorTag.click(); 

            // Reset Stylings back
            $('.PostContent').css('padding', '0 0 0 0');
            $('.PostContent .PostHeaderAligner').css('margin','0');
            $('.PostContent .PostUserCheck').css('margin','0'); 
            $('.MainPostText, .ReplyPostText').css('margin','0 0 0 0');
            $('.MainPostPictureContainer, .ReplyPostPictureContainer').css('margin','0 0 0 0');
        });
    });
});