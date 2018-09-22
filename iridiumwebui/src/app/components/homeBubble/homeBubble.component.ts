import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-homeBubble',
    templateUrl: './homeBubble.component.html',
    styleUrls: ['./homeBubble.component.scss']
})

export class HomeBubbleComponent implements OnInit {
	constructor() {}
	items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    ngOnInit() {
		var insideNode = "#bubbleContainer";
		var totalBubbles = 30;
		var maxTimeToMove = 1500;
		var minTimeToMove = 10000;
		var boundsX;
		var boundsY;

		$(document).ready(function() {
			var borderWidth = $(".bubble").css("border-left-width").slice(0, -2) * 2;

			boundsX = $(insideNode).width() - $(".bubble").width() - borderWidth;
			boundsY = $(insideNode).height() - $(".bubble").height() - borderWidth;

			function restartAnimation() {
				boundsX = $(insideNode).width() - $(".bubble").width() - borderWidth;
				boundsY = $(insideNode).height() - $(".bubble").height() - borderWidth;
				$(".bubble").stop(true);
				moveBubbles();
			};

			for (var i = 0; i < totalBubbles; i++) {
				var curr = document.getElementsByClassName("bubble")[i];
				$(curr).css("left", Math.floor(Math.random() * boundsX) + "px");
				$(curr).css("top", Math.floor(Math.random() * boundsX) + "px");
				var radious = Math.floor(Math.random() * 350) + 50;
				$(curr).css({"width": radious + "px", "height": radious + "px"});
			}
			$(window).resize(restartAnimation);
			moveBubbles();
		});
		function moveBubbles() {
			var curr;
			for (var i = 0; i < totalBubbles; i++) {
				curr = document.getElementsByClassName("bubble")[i];
				$(curr).animate(
					{
						left: Math.floor(Math.random() * boundsX),
						top: Math.floor(Math.floor(Math.random() * (boundsY)))
					},
					Math.floor((Math.random() * maxTimeToMove) + minTimeToMove),
					function() {
						moveBubbles();
					});
			}
		}
	}
	
	

}
