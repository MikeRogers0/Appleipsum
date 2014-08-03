/*
Ipsum v1.0.0
Copyright © 2011 Mike Rogers
http://www.fullondesign.co.uk/

Requires jQuery 1.7 or newer

Based on: 
	http://docs.jquery.com/Plugins/Authoring#Plugin_Methods
	http://stefangabos.ro/jquery/jquery-plugin-boilerplate/

License:
MIT License - http://www.opensource.org/licenses/mit-license.php

Enjoy!

*/
(function($) {

    $.fn.iPsum = function(method) {

        var methods = {

            init : function(options) {
                this.iPsum.settings = $.extend({}, this.iPsum.defaults, options);
                return this.each(function() {
                    var $element = $(this), // reference to the jQuery version of the current DOM element
                         element = this;      // reference to the actual DOM element
                    // code goes here
                    $element.iPsum('apply');
                });
            },
            apply: function(){
            	if($(this).is("p")){
            		return this.html($.fn.iPsum('getIpsumText'));
            	}
            	return this.html($.fn.iPsum('getIpsumQuote'));
            },
            // getIpsumText - Gets the nest ipsum text to add in "So were not seeing ipsum…ipsum…ipsum".
            getIpsumText: function(text_number){
            	var settings = $.fn.iPsum.settings;
            	// If the user wants a specific text_number
            	if(settings.ipsumText[text_number]){
            		return settings.ipsumText[text_number];
            	}
            	
            	settings.ipsumText_start++;
            	if(settings.ipsumText[(settings.ipsumText_start)]){
            		return settings.ipsumText[settings.ipsumText_start];
            	}
            	
            	settings.ipsumText_start = 0;
            	return settings.ipsumText[settings.ipsumText_start];
            },
            getIpsumQuote: function(text_number){
            	var settings = $.fn.iPsum.settings;
            	// If the user wants a specific text_number
            	if(settings.ipsumQuotes[text_number]){
            		return settings.ipsumQuotes[text_number];
            	}
            	
            	settings.ipsumQuotes_start++;
            	if(settings.ipsumQuotes[(settings.ipsumQuotes_start)]){
            		return settings.ipsumQuotes[settings.ipsumQuotes_start];
            	}
            	
            	settings.ipsumQuotes_start = 0;
            	return settings.ipsumQuotes[settings.ipsumQuotes_start];
            }
        }

        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error( 'Method "' +  method + '" does not exist in iPsum plugin!');
        }

    },

    $.fn.iPsum.defaults = {
        ipsumText: {
        	0: "You know, it was just a year ago that I was up here and announced that we were going to switch to Intel processors. A huge, heart transplant to Intel microprocessors. And I said that we would do it over the coming 12 months. We did it in seven months, and it was the -- it's been the smoothest and most successful transition that we've ever seen in the history of our industry. And it was because we made a beautiful, seamless version of OSX for Intel processors. And our team created Rosetta software which lets you run PowerPC apps on top of OSX on Intel processors. Our hardware team got to cranking out a new Mac with Intel processors every month, and we completed this transition in seven months. But we didn't do this alone. We did this with the help of a lot of folks. Our new colleagues at Intel really helped us. Thank you very much. Our third-party developers rapidly moving their apps to universal versions to run at native speeds on Intel processors. Thank you very much. And most of all, our users. The minute you saw these lightning-fast machines, you bought 'em. And we've had an extremely successful year, and I want to thank our users very much.",
        	1: "Now, as many as you know, our retail stores have for a while been selling over half their Macs to people who have never owned a Mac before: switchers. Well, I'm pleased to report that now, in the U.S., Macs selling through all channels, over half of them are selling to people who have never owned a Mac before. It's not just limited to our retail stores anymore. Half the Macs we're selling in the U.S. We are picking up lots and lots of new members of the Mac family, and we couldn't be happier. As a matter of fact, here's one that might be coming on soon. Jim Allchin at Microsoft was quoted recently as saying if he didn't work for Microsoft, he would buy a Mac, and he's retiring soon, so I've alerted our Seattle stores to keep an eye out for him and give him really good service. You know, Vista's coming out, and you know our ads with the Mac guy and the PC guy, we made a little ad for Vista, and I'd love to show it to you now, if you'd like to see it.",
        	2: "So, 2007 is going to be a great year for the Mac. But this is all we're going to talk about the Mac today. We're going to move on to some other things and over the course of the next several months we're going to roll out some awesome stuff for the Mac. But for today, we're going to move on.",
        	3: "This is a day I've been looking forward to for two-and-a-half years. Every once in a while, a revolutionary product comes along that changes everything. And Apple has been -- well, first of all, one's very fortunate if you get to work on just one of these in your career. Apple's been very fortunate. It's been able to introduce a few of these into the world. 1984, introduced the Macintosh. It didn't just change Apple. It changed the whole computer industry. In 2001, we introduced the first iPod, and it didn't just change the way we all listen to music, it changed the entire music industry. Well, today, we're introducing three revolutionary products of this class. The first one is a widescreen iPod with touch controls. The second is a revolutionary mobile phone. And the third is a breakthrough Internet communications device. So, three things: a widescreen iPod with touch controls; a revolutionary mobile phone; and a breakthrough Internet communications device. An iPod, a phone, and an Internet communicator. An iPod, a phone ... are you getting it? These are not three separate devices, this is one device, and we are calling it iPhone. Today, Apple is going to reinvent the phone, and here it is. No, actually here it is, but we're going to leave it there for now.",
        	4: "So, before we get into it, let me talk about a category of things. The most advanced phones are called smart phones, so they say. And they typically combine a phone plus some e-mail capability, plus they say it's the Internet. It's sort of the baby Internet, into one device, and they all have these little plastic keyboards on them. And the problem is that they're not so smart and they're not so easy to use, and so if you kind of make a Business School 101 graph of the smart axis and the easy-to-use axis, phones, regular cell phones are right there, they're not so smart, and they're not so easy to use. But smart phones are definitely a little smarter, but they actually are harder to use. They're really complicated. Just for the basic stuff people have a hard time figuring out how to use them. Well, we don't want to do either one of these things. What we want to do is make a leapfrog product that is way smarter than any mobile device has ever been, and super-easy to use. This is what iPhone is. OK?",
        	5: "So, we're going to reinvent the phone. Now, we're going to start with a revolutionary user interface. It is the result of years of research and development, and of course, it's an interplay of hardware and software. Now, why do we need a revolutionary user interface. Here's four smart phone, right? Motorola Q, the BlackBerry, Palm Treo, Nokia E62 -- the usual suspects. And, what's wrong with their user interfaces? Well, the problem with them is really sort of in the bottom 40 there. It's this stuff right there. They all have these keyboards that are there whether or not you need them to be there. And they all have these control buttons that are fixed in plastic and are the same for every application. Well, every application wants a slightly different user interface, a slightly optimized set of buttons, just for it. And what happens if you think of a great idea six months from now? You can't run around and add a button to these things. They're already shipped. So what do you do? It doesn't work because the buttons and the controls can't change. They can't change for each application, and they can't change down the road if you think of another great idea you want to add to this product.",
        	6: "And if I want to pick somebody, let's say I want to pick the Beatles, I just tap them, and here's the Beatles songs with their albums right here. If I want to play Sgt. Pepper's I just hit Sgt. Pepper's right there, and &quot;A Little Help From My Friends.&quot; Look at this gorgeous album artwork here. Of course, I've got a volume control. Now, I've got a little button up in the corner right here, you can see in the upper right-hand corner, I can hit that and flip the album art around. There's all the other songs back here. And I can play &quot;Lovely Rita&quot; if I want to. Flip back around. Very simple. Right, I can set some stars back here just by setting the arrows. That's a five star album. Isn't that cool? Yeah, it's pretty nice.",
        	7: "Now, let me show you something else. I just take my unit here, and I turn it landscape mode, oh, look what happens! I'm in cover flow. Let's go into Dylan here, let's play &quot;Like a Rolling Stone.&quot; I just thumb through, just thumb through my albums. It's real easy. Anytime I find something I like, I just turn it around, and play something. It's that easy. It's that simple. Isn't that great? Alright. I could play with this for a long time.</p>",
        	8: "Again, I've got playlists here. I can go into my playlists. I've got artists. I've got songs. I've got more over here. I've got albums. I've got a great album view again that shows all my album artwork if I want. And I've also got audio books and compilations and things like that. I've also got videos here. So I push videos and I've got a video podcast loaded on, and a music video. And I've got a TV show and a movie, and I'd just like to show you the TV show here. This is an episode from The Office. All videos we look at in landscape.",
			9: "Now this is a widescreen movie so I just double-tap and I can see the whole thing here, or I can fill up the screen, whichever I like. And again, I've got on-screen controls here. Isn't this cool? So we can be watching feature-length movies just like this. Alrighty. So that is the iPod. Pretty cool, huh? We've just started. So again, touch your music to scroll through your songs, scroll through your playlists. It's incredible. Widescreen video like you've never seen on a portable device, 160 pixels per inch, gorgeous screen quality, gorgeous album art, and cover flow. It's the best iPod we've ever made. Again, some of the screen shots. It's unbelievable. Here's some album art I just put up, so you can see what it looks like. Just, no matter what you like, it looks pretty doggone gorgeous. And of course, cover flow and video, with on-screen controls.",
			10: "You know, I was showing this to somebody -- I was giving a demo to somebody a while ago, who had never seen this before, inside Apple. And I finished the demo, and I said what do you think. They told me this, they said, You had me at scrolling. So, the iPhone with the most amazing iPod ever. You can now touch your music.",
			11: "So, I want to show you four things. I want to show you the phone app, photos, got a calendar, and SMS messaging. The kind of things you would find on a typical phone, but in a very untypical way. So let's go ahead and take a look. So let's go to our phone first. You see that icon in the lower left-hand corner, the phone? I just push it right here, and boom, I'm in the phone. And I've got five buttons across the bottom: favorites, recents, contacts, keypad and voice mail. I'm in contacts, right now, again. How do I move around my contacts? I just scroll through them. And so, let's say I want to make a call to Jony Ive. I can just push here, and I see Jony Ive's context, with all his information: his three phone numbers, his e-mail, whatever else, his address, whatever else I've got. It's all in one place. And if I want to call Jony, all I do is push his phone number. I'll call his mobile number right now. And now, we are calling Jony here.",
			12: "Isn't this awesome. And so I've got voice mail how I want to listen to it, when I want to listen to it, in any order I want to listen to it with visual voice mail. So that is a quick tour of the phone app.Now what I want to do is show you SMS texting. So I just go to that SMS icon in the upper-left-hand corner and push it. And I not only have SMS texting, but I have multiple sessions. So I can be carrying on conversations with people, and every time I get messages from them, I can be alerted to that, and go check it out. As an example here, I've got Eddie Q and I've been carrying on a conversation with Eddie, and I just tap this, and here's the conversation I've been carrying on right here. And if there's a new message it will tell me. And so there's a new message from Phil, and let's see the conversation was what.",
			13: "And I've got this little keyboard which was phenomenal. It does error prevention and correction. Not that I won't make some, I probably will. But it's actually really fast to type on. It's faster than all these little plastic keyboards on all these smart phones. So I can just say sounds great, see you there. And I can send that. And there it is. It's that simple. And when Phil messages me back, I'll be alerted, I'll see the dot, and I can just go pick up that conversation where it left off. If I want to send a message to Eddie or Scott, I just push this and send a message and go. It's so simple. So that's SMS messaging, and again, you've seen the keyboard, it's pretty awesome. We'll come back to that a little later.",
			14: "Get a call, again, just really great call management features, just scroll through contacts with your finger. All the information at your fingertips here. Favorites, last century, visual voice mail. Calendar, SMS texting, incredible photo app, the ability to just take any picture and make it your wallpaper. It's pretty unbelievable, and I think when you have a chance to get your hand on it, you'll agree, we have reinvented the phone. OK."
        },
        ipsumQuotes:{
        	0: "When you're a carpenter making a beautiful chest of drawers, you're not going to use a piece of plywood on the back, even though it faces the wall and nobody will ever see it. You'll know it's there, so you're going to use a beautiful piece of wood on the back. For you to sleep well at night, the aesthetic, the quality, has to be carried all the way through.",
        	1: "Remembering that I'll be dead soon is the most important tool I've ever encountered to help me make the big choices in life. Because almost everything - all external expectations, all pride, all fear of embarrassment or failure - these things just fall away in the face of death, leaving only what is truly important. Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose. You are already naked. There is no reason not to follow your heart.",
        	2: "Innovation comes from people meeting up in the hallways or calling each other at 10.30 at night with a new idea, or because they realised something that shoots holes in how we've been thinking about a problem. It's ad hoc meetings of six people called by someone who thinks he has figured out the coolest new thing ever and who wants to know what other people think of his idea.",
        	3: "The desktop computer industry is dead. Innovation has virtually ceased. Microsoft dominates with very little innovation. That's over. Apple lost. The desktop market has entered the dark ages, and it's going to be in the dark ages for the next 10 years, or certainly for the rest of this decade.",
        	4: "The most compelling reason for most people to buy a computer for the home will be to link it to a nationwide communications network. We're just in the beginning stages of what will be a truly remarkable breakthrough for most people – as remarkable as the telephone.",
        	5: "You can't connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future. You have to trust in something – your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life.",
        	6: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it. And, like any great relationship, it just gets better and better as the years roll on. So keep looking until you find it. Don't settle.",
        	7: "My position coming back to Apple was that our industry was in a coma. It reminded me of Detroit in the 70s, when American cars were boats on wheels.",
        	8: "In most people's vocabularies, design means veneer. It's interior decorating. It's the fabric of the curtains and the sofa. But to me, nothing could be further from the meaning of design. Design is the fundamental soul of a man-made creation that ends up expressing itself in successive outer layers of the product or service.",
        	9: "Design is a funny word. Some people think design means how it looks. But of course, if you dig deeper, it's really how it works. The design of the Mac wasn't what it looked like, although that was part of it. Primarily, it was how it worked. To design something really well, you have to get it. You have to really grok what it's all about. It takes a passionate commitment to really thoroughly understand something, chew it up, not just quickly swallow it. Most people don't take the time to do that.",
        	10: "So when these people sell out, even though they get fabulously rich, they're gypping themselves out of one of the potentially most rewarding experiences of their unfolding lives. Without it, they may never know their values or how to keep their newfound wealth in perspective.",
        	11: "The problem with the internet start-up craze isn't that too many people are starting companies; it's that too many people aren't sticking with it. That's somewhat understandable, because there are many moments that are filled with despair and agony, when you have to fire people and cancel things and deal with very difficult situations. That's when you find out who you are and what your values are.",
        	12: "That's been one of my mantras — focus and simplicity. Simple can be harder than complex: You have to work hard to get your thinking clean to make it simple. But it's worth it in the end because once you get there, you can move mountains.",
        	13: "We think the Mac will sell zillions, but we didn't build the Mac for anybody else. We built it for ourselves. We were the group of people who were going to judge whether it was great or not. We weren't going to go out and do market research. We just wanted to build the best thing we could build.",
        	14: "There's nothing that makes my day more than getting an e-mail from some random person in the universe who just bought an iPad over in the UK and tells me the story about how it's the coolest product they've ever brought home in their lives. That's what keeps me going. It's what kept me five years ago [when he was diagnosed with cancer], it's what kept me going 10 years ago when the doors were almost closed. And it's what will keep me going five years from now whatever happens.",
        	15: "I don't think I've ever worked so hard on something, but working on Macintosh was the neatest experience of my life. Almost everyone who worked on it will say that. None of us wanted to release it at the end. It was as though we knew that once it was out of our hands, it wouldn't be ours any more."
        },
        ipsumText_start: -1,
        ipsumQuotes_start: -1
    },

    $.fn.iPsum.settings = {}

})(jQuery);
