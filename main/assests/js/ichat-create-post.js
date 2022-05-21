$(document).ready(function () {

	// ****************************** CHOOSE FILE ON CLICK
	$('.ChooseFilesToPost').on('click', function () {
		$('.PostGalleryURLsHolder').click();
	});

	// ****************************** FETCH FILES FROM DOM INPUT FILE
	$('.PostGalleryURLsHolder').on('change', function () {
		var xfiles = document.getElementById('PostGalleryURLsHolder').files;
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

	// ******************************* CREATE GALLERY PREVIEW
	function SetGalleryPreview(fileToPreview) {
		let FileExtension = fileToPreview.type;

		if(FileExtension.substr(0,5) == 'image') {
			let FileURL = URL.createObjectURL(fileToPreview);
			let Image = document.createElement('img');
			Image.src = FileURL;
			Image.alt = fileToPreview.name;
			Image.draggable = true;
			Image.className = 'MainPostPicture';
			$('.PostGallery').html(Image);
		} 
	}

	// Back Arrow Button To hide Create Post Page
	$('.BackArrow').on('click', function () {
        $('.CreatePostPage').hide();
		$('body').css('overflow-y','scroll');
	});


	// MAIN POINT CREATE POST FORM SUBMITTION
	$('.CreatePostButton').on('click', function () {
		$('.MainPostText').html($('.MainPostTextContent').val());
		$('.MainPostPictureContainer').html($('.PostGallery').html());
		$('.showReplyPage').show();
		$('.ClearPost').show();
		$('.SavePost').show();
		$('.ShowPostDropdownOption').show();
		$('.CreatePostPage').hide();
		$('body').css('overflow-y','scroll');
	});

	// Clear Choosen Files
	$('.ClearChoosenFiles').on('click', function () {
		$('.PostGalleryURLsHolder').val('');
		$('.PostGallery').html('');
	});

	// Remove a child element of PostGallery on click
	let PostGallery = document.getElementById('PostGallery');
	PostGallery.addEventListener('click', (e) => {
		PostGallery.removeChild(e.target);
	});
});	