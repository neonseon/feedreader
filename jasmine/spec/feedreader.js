/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has a defined URL that is not empty', function() {

            allFeeds.forEach(function(feed) {
                // test to see that url in a defined property in the feed
                expect(feed.url).toBeDefined();
                // test to see that the URL is not empty
                expect(feed.url).not.toBe('');
            });

        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('has a defined name that is not empty', function() {

            allFeeds.forEach(function(feed) {
                // test to see that name in a defined property in the feed
                expect(feed.name).toBeDefined();
                // test to see that the name is not empty
                expect(feed.name).not.toBe('');
            });

         });

    });


    describe('The menu', function() {

        /* This test ensures the menu element is
         * hidden by default.
         */
        it('is hidden by default', function() {
            // test to see that body element has class of "menu-hidden"
            // additional classes could be added in the future
            // so use "contains"
            expect(document.body.classList.contains('menu-hidden')).toBe(true);

        });

         /* This test ensures the menu changes
          * visibility when the menu icon is clicked.
          */
        it('is visible when the icon is clicked', function() {
            // test to see that menu displays when clicked
            $('.menu-icon-link').trigger('click');
            expect(document.body.classList.contains('menu-hidden')).toBe(false);
            // test to see that menu hides when clicked again
            $('.menu-icon-link').trigger('click');
            expect(document.body.classList.contains('menu-hidden')).toBe(true);

        });

    });


    describe('Initial Entries', function() {

        /* This test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * loadFeed() is asynchronous so this test requires
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) { //pass done to callback

            loadFeed(0, function() {
                done(); //call done function
            });
        });


        it('should be at least one', function() {

            expect($('.feed .entry')).toBeDefined();

        });

    });


    describe('New Feed Selection', function() {

        /* This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * loadFeed() is asynchronous.
         */

        beforeEach(function(done) { //pass done to callback
          /* Load second feed of allFeeds array with a callback which will
           * reload the first feed of the array
           */

            loadFeed(1, function() {
                // Wait till it's done and Store the loaded feed for future testing
                secondFeed = $('.feed').html();

            /* load the first feed of allFeeds with a call back function waiting
            * for the feed to be loaded.
            * Doing in this order will let the page in the same state as
            * before testing
            */
            loadFeed(0, function() {
                // wait till it's done
                // Store the loaded feed for future testing
                firstFeed = $('.feed').html();

                done(); //call done function
            });

          });

        });


        it('should show new content', function() {
            //compares feeds
            expect(firstFeed).not.toBe(secondFeed);

        });

    });
}());
