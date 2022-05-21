<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="description" content="">
	<meta name="author" content="">
	<title>iChat Feed - Typical Feed Interface</title>
	<link rel="stylesheet" type="text/css" href="assests/css/ichat-about-software-light.css" id="AboutSoftware">
	<link rel="stylesheet" type="text/css" href="assests/css/ichat-feed-light.css" id="TwitterFeed">
	<link rel="stylesheet" type="text/css" href="assests/css/ichat-create-post-light.css" id="CreatePost">
	<link rel="stylesheet" type="text/css" href="assests/css/ichat-reply-post-light.css" id="ReplyPost">
	<link rel="stylesheet" type="text/css" href="assests/fontawesome-free/css/all.min.css">
	<link rel="stylesheet" type="text/css" href="assests/fontisto-master/css/fontisto/fontisto.css">
	<link rel="stylesheet" type="text/css" href="assests/css/ichat-hybrid.css">
</head>

<body>

	<div class="Feed TwitterFeed" style="display: block;">
		<!-- ***************************************************** -->
		<nav class="MainNav TopNav TopBar">
			<div class="ContainerFluid LeftContent">
				<span src="assests/image/blue-ichat-logo-3.png" class="iChatBrand" height="25px">iMemes</span>
			</div>
			<div class="ContainerFluid RightContent">
				<i class="fi fi-spinner-cog fi-fw ShowSettingsPopup"></i>
			</div>
		</nav>
		<!-- **************************************************** -->
		<div class="SettingsPopup Popup" style="display: none;">
			<div class="SettingsPopupOverlay"></div>
			<ul>
				<li class="ChangeTheme">
					<i class="fa fa-paint-brush fa-fw mr-2"></i>
					<span>Change Theme</span>
					<input type="hidden">
				</li>
				<li class="AboutTheSoftware">
					<i class="fa fa-thumbs-up fa-fw mr-2"></i>
					<span>About the Software</span>
					<input type="hidden">
				</li>
			</ul>
		</div>
		<!-- **************************************************** -->
		<div class="PostContent" id="PostContent" style="padding-bottom: 10px;">
			<div class="Post">
				<div class="PostHeader">
					<div class="PostProfilePicture">
						<img src="assests/image/user.jpg" class="img-profile-lg rounded-circle ShowProfileSummary">
					</div>
					<div class="PostHeaderAligner">
						<div class="PostUserDetails">
							<div class="PostName">
								<span>O.V.A.tions</span>
								<i class="fa fa-check-circle fa-fw PostUserCheck"></i>
							</div>
							<div class="PostUserName text-gray-600">@abbiey2579</div>
						</div>
						<div class="PostDropdown">
							<i class="fi fi-angle-down fi-fw ShowPostDropdownOption" style="display: none"></i>
							<div class="PostDropdownOption Popup" style="display: none;">
								<div class="Popupoverlay"></div>
								<ul>
									<li class="SavePost">
										<i class="fi fi-pinboard fi-fw mr-2"></i>
										<span>Save post</span>
										<input type="hidden">
									</li>
									<li class="showReplyPage">
										<i class="fi fi-reply fi-fw mr-2"></i>
										<span>Reply</span>
										<input type="hidden">
									</li>
									<li class="ClearPost">
										<i class="fi fi-trash fi-fw mr-2"></i>
										<span>Clear Post</span>
										<input type="hidden">
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="PostBody">
					<div class="PostTextContainer">
						<p class="MainPostText"></p>
					</div>
					<div class="PostFileContainer MainPostPictureContainer">
						<img src="" class="MainPostPicture rounded">
					</div>
				</div>
			</div>
			<div class="Post ReplyPost" style="display: none;">
				<div class="PostHeader">
					<div class="ReplyPostProfilePicture" style="margin-right: 10px;"></div>
					<div class="PostHeaderAligner">
						<div class="PostUserDetails">
							<div class="PostName ReplyFullName"></div>
							<div class="PostUserName ReplyUserNameMain text-gray-600"></div>
						</div>
						<div class="PostDropdown">
							<i class="fi fi-angle-down fi-fw ShowPostDropdownOption"></i>
						</div>
					</div>
				</div>
				<div class="PostBody">
					<div class="PostTextContainer">
						<p class="ReplyPostText"></p>
					</div>
					<div class="PostFileContainer ReplyPostPictureContainer"></div>
				</div>
			</div>
		</div>
		<!-- **************************************************** -->
		<footer class="PostContentsPageFooter">
			<div class="ContainerFluid">
				<i class="fi fi-twitter fi-fw" style="color: #0095F6;"></i>
				<img src="assests/image/user.jpg" class="img-profile-lg rounded-circle">
			</div>
		</footer>
		<!-- **************************************************** -->
		<div class="CreatePost">
			<i class="fi fi-plus-a"></i>
		</div>
	</div>

	<div class="CreatePostPage" style="display: none;">
		<!-- ***************************************************** -->
		<nav class="MainNav TopNav TopBar">
			<div class="ContainerFluid LeftContent BackArrow">
				<i class="fi fi-angle-left fi-fw"></i>
			</div>
			<div class="ContainerFluid RightContent">
				<span class="CreatePostButton">POST</span>
			</div>
		</nav>
		<!-- ***************************************************** -->
		<div class="CreatePostContent">
			<div class="PostHeader">
				<div class="PostProfilePicture">
					<img src="assests/image/user.jpg" class="img-profile-lg rounded-circle">
				</div>
				<div class="PostHeaderAligner">
					<div class="PostUserDetails">
						<div class="PostName">O.V.A.tions <i class="fa fa-check-circle fa-fw"></i></div>
						<div class="PostUserName text-gray-600">@abbiey2579</div>
					</div>
				</div>
			</div>
			<div class="PostBody">
				<div class="PostTextContainer">
					<form action="" class="CreatePostForm">
						<textarea rows="3" placeholder="What's on your mind?" class="MainPostTextContent"></textarea>
						<input type="file" name="file" class="PostGalleryURLsHolder" id="PostGalleryURLsHolder" style="display: none;">
					</form>
				</div>
				<div class="PostGallery" id="PostGallery"></div>
			</div>
		</div>
		<!-- **************************************************** -->
		<footer class="CreatePostFooter">
			<div class="ContainerFluid">
				<i class="fi fi-photograph fi-fw ChooseFilesToPost"></i>
				<i class="fi fi-trash fi-fw ClearChoosenFiles"></i>
			</div>
		</footer>
		<!-- **************************************************** -->
	</div>

	<div class="ReplyPostPage" style="display: none;">
		<!-- ***************************************************** -->
		<nav class="MainNav TopNav TopBar">
			<div class="ContainerFluid LeftContent BackArrow">
				<i class="fi fi-angle-left fi-fw HideReplyPostPage"></i>
			</div>
			<div class="ContainerFluid RightContent">
				<span class="ReplyPostButton">REPLY</span>
			</div>
		</nav>
		<!-- ***************************************************** -->
		<div class="ReplyPostContent">
			<div class="ReplyPostHeader">
				<div class="PostProfilePicture ReplyPostProfilePictureContainer"></div>
				<div class="PostHeaderAligner">
					<div class="PostUserDetails">
						<div class="ReplyPostName"></div>
						<div class="ReplyPostUserName text-gray-600"></div>
					</div>
				</div>
				<div class="ReplyModelContainer">
					<i class="fi fi-angle-down fi-fw ShowReplyModelPopup"></i>
					<div class="CreateReplyModel Popup" style="display: none;">
						<div class="ReplyModel">
							<div class="ModelProfilePictureContainer"></div>
							<input type="file" class="ModelProfilePictureURLHolder" id="ModelProfilePictureURLHolder" style="display: none;">
							<div class="ModelPersonalDetails">
								<input type="text" class="ModelName" placeholder="Model Name">
								<input type="text" class="ModelUsername" placeholder="Model Username">
							</div>
							<button class="UseModelButton">Use Model</button>
							<button class="ExitModelButton">Exit</button>
						</div>
					</div>
				</div>
			</div>
			<div class="ReplyPostBody">
				<div class="ReplyPostTextContainer">
					<form action="" class="ReplyPostForm">
						<textarea rows="3" placeholder="What's on your mind?" class="ReplyPostTextContent"></textarea>
						<input type="file" name="file" class="ReplyPostGalleryURLsHolderBody" id="ReplyPostGalleryURLsHolderBody" style="display: none;">
					</form>
				</div>
				<div class="ReplyPostGallery" id="ReplyPostGallery"></div>
			</div>
			<!-- **************************************************** -->
			<footer class="ReplyPostFooter">
				<div class="ContainerFluid">
					<i class="fi fi-photograph fi-fw ChooseFilesToReply"></i>
					<i class="fi fi-trash fi-fw ClearChoosenFilesReply"></i>
				</div>
			</footer>
		</div>
	</div>

	<div class="AboutSoftware" style="display: none;">
		<!-- ***************************************************** -->
		<nav class="MainNav TopNav TopBar">
			<div class="ContainerFluid LeftContent BackArrow">
				<i class="fi fi-angle-left fi-fw HideAboutSoftware"></i>
			</div>
			<div class="ContainerFluid RightContent">
				<span>About The Software</span>
			</div>
		</nav>
		<!-- ***************************************************** -->
		<div class="Body">
			<div class="BodyHeader">
				<h1>Thank You for choosing</h1>
				<h1 class="SoftwareBrand">iMemes</h1>
			</div>
			<div class="BodyContent">
				<p>
					This is an open-source project, ready to accept suggestions from anyone possible,
					if you're willing to participate in making this software better,
					use below social media handles.
				</p>
				<ul>
					<li>
						<i class="fi fi-twitter fi-fw"></i>
						<span>@ichatmemecreator</span>
					</li>
					<li>
						<i class="fi fi-facebook fi-fw"></i>
						<span>/ichatmemecreator</span>
					</li>
					<li>
						<i class="fi fi-instagram fi-fw"></i>
						<span>@ichatmemecreator</span>
					</li>
					<li>
						<i class="fi fi-whatsapp fi-fw"></i>
						<a href="#">iChat Meme Creator</span>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<script type="text/javascript" src="assests/jquery/jquery.min.js"></script>
	<script type="text/javascript" src="assests/bootstrap/js/bootstrap.bundle.min.js"></script>
	<script type="text/javascript" src="assests/js/ichat-create-post.js"></script>
	<script type="text/javascript" src="assests/js/ichat-reply-post.js"></script>
	<script type="text/javascript" src="assests/js/ichat-feed.js"></script>
	<script type="text/javascript" src="assests/js/ichat-theme.js"></script>
	<script type="text/javascript" src="assests/js/ichat-save-post.js"></script>
	<script type="text/javascript" src="assests/js/ichat-about-software.js"></script>
	<script type="text/javascript" src="assests/js/html2canvas.js"></script>
</body>

</html>