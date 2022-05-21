$(document).ready(function () {
    $('.ChangeTheme').on('click', function () {
        if($('#TwitterFeed').attr('href') === 'assests/css/ichat-feed-dark.css') {
            $('#TwitterFeed').attr('href', 'assests/css/ichat-feed-light.css'); 
            $('#CreatePost').attr('href', 'assests/css/ichat-create-post-light.css'); 
            $('#ReplyPost').attr('href', 'assests/css/ichat-reply-post-light.css');
            $('#AboutSoftware').attr('href', 'assests/css/ichat-about-software-light.css');
            $('.PostDropdownOption').hide();
        } else {
            $('#TwitterFeed').attr('href', 'assests/css/ichat-feed-dark.css'); 
            $('#CreatePost').attr('href', 'assests/css/ichat-create-post-dark.css'); 
            $('#ReplyPost').attr('href', 'assests/css/ichat-reply-post-dark.css'); 
            $('#AboutSoftware').attr('href', 'assests/css/ichat-about-software-dark.css');
            $('.PostDropdownOption').hide();
        }
    });
});	