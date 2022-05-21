$(document).ready(function () {

	$('.ExitModelButton').on('click', function () {
		$('.CreateReplyModel').hide();
	});

	$('.HideReplyPostPage').on('click', function () {
		$('.ReplyPostPage').hide();
		$('.PostDropdownOption').hide();
	});

    $('.ShowReplyModelPopup').on('click', function () {
		$('.CreateReplyModel').show();
    });

    $('.ModelProfilePictureContainer').on('click', function () {
        $('.ModelProfilePictureURLHolder').click();
        $('.ModelProfilePictureContainer').html('');
    });

	if($('.ReplyPostProfilePictureContainer').html() === '') {
		$('.ReplyPostProfilePictureContainer').html('<span></span>');
	}

	if($('.ReplyPostName').html() === '') {
		$('.ReplyPostName').html('<span></span>');
	}

	if($('.ReplyPostUserName').html() === '') {
		$('.ReplyPostUserName').html('<span></span>');
	}

    	// ****************************** FETCH FILES FROM DOM INPUT FILE
	$('.ModelProfilePictureURLHolder').on('change', function () {
		var xfiles = document.getElementById('ModelProfilePictureURLHolder').files;
		for (var i = 0; i < xfiles.length; i++) {
			let FileExtension = xfiles[i].type;
			let ValidFileExtension = (FileExtension.substr(0,5) == 'image') ? true:false;
			if(ValidFileExtension) {
				SetGalleryPreview(xfiles[i]);
			} else {
				alert('Unsupported file format detected');
			}
		}
	});

	// ******************************* CREATE GALLERY PREVIEW FOR REPLY MODEL
	function SetGalleryPreview(fileToPreview) {
		let FileExtension = fileToPreview.type;

		if(FileExtension.substr(0,5) == 'image') {
			let FileURL = URL.createObjectURL(fileToPreview);
			let Image = document.createElement('img');
			Image.src = FileURL;
			Image.alt = fileToPreview.name;
			Image.draggable = true;
			Image.className = 'ModelProfilePicture';
			$('.ModelProfilePictureContainer').html(Image);
		} 
	}

	$('.UseModelButton').on('click', function () {
		if($('.ModelProfilePictureURLHolder').val() !== '' && $('.ModelName').val() !== '' && $('.ModelUsername').val() !== '') {
			$('.CreateReplyModel').hide();
			let Image = document.createElement('img');
			Image.src = $('.ModelProfilePicture').attr('src');
			Image.alt = $('.ModelProfilePicture').attr('alt');
			Image.draggable = true;
			Image.className = 'img-profile-lg rounded-circle ReplyPostProfilePicture';
			$('.ReplyPostProfilePictureContainer').html(Image);
			$('.ReplyPostName').html($('.ModelName').val());
			$('.ReplyPostUserName').html('@'+$('.ModelUsername').val().toLowerCase());
		}
	});

	// ******************************************************************************

	$('.ChooseFilesToReply').on('click', function () {
		$('.ReplyPostGalleryURLsHolderBody').click();
	});

	$('.ReplyPostGalleryURLsHolderBody').on('change', function () {
		var xfiles = document.getElementById('ReplyPostGalleryURLsHolderBody').files;
		for (var i = 0; i < xfiles.length; i++) {
			let FileExtension = xfiles[i].type;
			let ValidFileExtension = (FileExtension.substr(0,5) == 'image') ? true:false;
			if(ValidFileExtension) {
				SetGalleryPreviewReplyPost(xfiles[i]);
			} else {
				alert('Unsupported file format detected');
			}
		}
	});

	// ******************************* CREATE GALLERY PREVIEW FOR REPLY POST
	function SetGalleryPreviewReplyPost(fileToPreview) {
		let FileExtension = fileToPreview.type;

		if(FileExtension.substr(0,5) == 'image') {
			let FileURL = URL.createObjectURL(fileToPreview);
			let Image = document.createElement('img');
			Image.src = FileURL;
			Image.alt = fileToPreview.name;
			Image.draggable = true;
			Image.className = 'ModelProfilePicture';
			$('.ReplyPostGallery').html(Image);
		} 
	}

	// Clear Choosen Files FOR REPLY POST
	$('.ClearChoosenFilesReply').on('click', function () {
		$('.ReplyPostGalleryURLsHolderBody').val('');
		$('.ReplyPostGallery').html('');
	});

	// Remove a child element of PostGallery on click FOR REPLY POST
	let PostGallery = document.getElementById('ReplyPostGallery');
	PostGallery.addEventListener('click', (e) => {
		PostGallery.removeChild(e.target);
	});

	// ***************************** CREATING REPLY POST

	// MAIN POINT CREATE POST FORM SUBMITTION
	$('.ReplyPostButton').on('click', function () {
		if($('.ReplyPostProfilePictureContainer').html() !== '<span></span>' && $('.ReplyPostName').html() !== '<span></span>' && $('.ReplyPostUserName').html() !== '<span></span>') {
			if($('.ReplyPostTextContent').val() !== '' || !$('.ReplyPostGallery').html('')) {
				$('.ReplyPostProfilePicture').html($('.ReplyPostProfilePictureContainer').html());
				$('.ReplyFullName').html($('.ReplyPostName').html());
				$('.ReplyUserNameMain').html($('.ReplyPostUserName').html());
		
				$('.ReplyPostText').html($('.ReplyPostTextContent').val());
				$('.ReplyPostPictureContainer').html($('.ReplyPostGallery').html());
				$('.ReplyPostPage').hide();
				$('.ReplyPost').show();
				$('.PostDropdownOption').hide();
				$('body').css('overflow-y','scroll');
			}
		}	
	});

});