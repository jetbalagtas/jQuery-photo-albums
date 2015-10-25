$(document).ready(function () {

  // All Albums View
var albumsView = _.template($('#albumsViewTmpl').html());
console.log("photo-album template: ", albumsView);
window.albumCoversHTML = "";

// merge data from myAlbums with markup in order to add to html
  _.each(myAlbums, function (currVal, idx, arr) {
    albumCoversHTML += albumsView(currVal);
    console.log('albumCoversHTML: ', albumCoversHTML);
  });

// Single Album View
  var singleAlbumView = _.template($('#singleAlbumTmpl').html());
  console.log("photo-album template: ", singleAlbumView);
  window.singleAlbumHTML = "";

  // merge data from myAlbums with markup in order to add to html
    _.each(myAlbums, function (currVal, idx, arr) {
      singleAlbumHTML += singleAlbumView(currVal);
      console.log('singleAlbumHTML: ', singleAlbumHTML);
    });

// markup for the dom
var headerTitle = "<header><h1>Summer 2015</h1></header>";
$('.albumsHeader').html(headerTitle);

$('.albumCollection').html(albumCoversHTML);

// var homeOfAlbums = _.filter(myAlbums, function (currItem, idx) {
//   return homeOfAlbums;
// });
//   _.each(homeOfAlbums, function (currItem) {
//     $('.home').html(albumsView(currItem));
//   });

  $('.albumCollection').on('click', function (event) {
    event.preventDefault();
    $('.single-album').removeClass("hidden");
    $('single-album').html(singleAlbumHTML);
    $('.sidebar').removeClass("hidden");
    $('.albumCollection').addClass("hidden");
    var oneAlbumHeader =
    $('h1').text('albumName');
  });

// Lauren's code
// $('.column1r2').click(function(event){
// event.preventDefault();
// $('.allpicsview').removeClass("hidden");
// $('.allcolumns').addClass("hidden");
// $('.navbar').text("New Zealand Pt.2");
// $('.navbar').addClass('allpicsstyle');
// $(".column1r2").siblings().css("display","none");});

// $('nav a').on('click', function (event) {
//   event.preventDefault();
//     var clickedSection = "." + $(this).attr('rel');
//     console.log(clickedSection);
//     $(clickedSection).addClass('active-section');
//     $(clickedSection).siblings('section').removeClass('active-section');
// });

// Bear's code
// $('.album1').on('click', function(event){
//  event.preventDefault();
//  $('.photo-boxes-container').toggleClass('hidden');
//  $('.container1').append("<img src='" + photos.pics1[0] + "'>");
//  $('.container1').append("<img src='" + photos.pics2[0] + "'>");
//  $('.container1').append("<img src='" + photos.pics3[0] + "'>");
//  $('.container1').append("<img src='" + photos.pics4[0] + "'>");
//  $('.container1').append("<img src='" + photos.pics5[0] + "'>");
//  $('.container1').append("<img src='" + photos.pics6[0] + "'>");
// });




























});