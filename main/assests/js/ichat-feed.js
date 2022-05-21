$(document).ready(function () {

    $('.CreatePost').on('click', function () {
        $('.CreatePostPage').show();
        $('body').css('overflow-y','hidden');
    });

    $('.ShowSettingsPopup').on('click', function () {
        $('.SettingsPopup').show();
    });

    $('.SettingsPopupOverlay').on('click', function () {
        $('.SettingsPopup').hide();
    });

    if($('.MainPostText').html() === '') {
        $('.MainPostText').html('<span></span><span></span>');
    }

    $('.AboutTheSoftware').on('click', function () {
        $('.AboutSoftware').show();
    });

    if($('.MainPostPicture').attr('src') === '') {
        $('.MainPostPictureContainer').html('<div></div>');
    }

    // Show Post dropdown option
	$('.ShowPostDropdownOption').on('click', function () {
		$(this).next().show();
		$('body').css('overflow-y', 'hidden');
	});

	$('.Popupoverlay').on('click', function () {
		$(this).parent().hide();
		$('body').css('overflow-y', 'scroll');
	});

    // SHOW REPLY PAGE
    $('.showReplyPage').on('click', function () {
       $('.ReplyPostPage').show(); 
    });

    // HIDE SHOW REPLY PAGE LINK
    if($('.MainPostText').html() === '<span></span><span></span>' && $('.MainPostPictureContainer').html() === '<div></div>') {
        $('.showReplyPage').hide();
        $('.ClearPost').hide();
        $('.SavePost').hide();
        $('.ShowPostDropdownOption').hide();
    }

    $('.ClearPost').on('click', function () {
        $('.MainPostText').html('<span></span><span></span>');
        $('.MainPostPictureContainer').html('<div></div>');
        $('.ReplyPostText').html('');
        $('.ReplyPostPictureContainer').html('');
        $('.PostDropdownOption').hide();
        $('.ReplyPost').hide();
        $('.ClearPost').hide();
        $('.SavePost').hide();
        $('.showReplyPage').hide();
        $('.ShowPostDropdownOption').hide();
    });

});