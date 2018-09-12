# RSS Feedreader Test Suite

This web-based application reads RSS feeds and uses Jasmine to test its features.


## How to Run the Application

To run the application, include your feed name and url in the `allFeeds` array. This will add the feed to the menu and loop through the entries to post them.


## Testing

Testing of the underlying business logic of the application as well as the event handling and DOM manipulation is done via Jasmine. The test suites and features are:

- `RSS Feeds` Test Suite
  - A test that checks that `allFeeds` is defined and not empty.
  - A test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
  - A test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
- `The menu` Test Suite
  - A test that ensures the menu element is hidden by default.
  - A test that ensures the menu changes visibility when the menu icon is clicked. This test has two expectations: does the menu display when clicked and does it hide when clicked again.
- `"Initial Entries"` Test Suite
  - A test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
- `"New Feed Selection"` Test Suite
  - A test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.