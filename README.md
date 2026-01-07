# AO3-scrape-bookmarklet
Scrape filter information from an AO3 tag page using artoo.js and export it as a .csv. Created with the [artoo.js bookmarklet generator](https://medialab.github.io/artoo/generator/).

> [!Important]
> I have only tested this on Firefox. I also don't know anything about Javascript so I can't help if you have any problems. This probably doesn't work on mobile.

## How to install
1. Create a new bookmark with the name "AO3 Tag Scrape" (or whichever name you like!) and copy the code from this repository's bookmarklet.js file into its URL field.

## How to use
1. Navigate to the AO3 page you want to get filter information from, ex. https://archiveofourown.org/tags/Scarlet%20Hollow%20(Video%20Game)/works
2. Click on the bookmarklet. If all goes well, it will:
  3.  Copy the top ten ratings, warnings, characters, fandoms, relationships, and additional tags, plus how many times each one is used.
  4.  Download the results as a .csv to your computer.

## How to customize
Open raw.js in your preferred code editor, make your desired changes, then save as a new bookmarklet by going to [the artoo.js bookmarklet generator](https://medialab.github.io/artoo/generator/) and copying the generated bookmarklet url it gives you into a new bookmarklet. Full documentation of how this bookmarklet works can be found on [artoo.js's wiki](https://medialab.github.io/artoo/).

### To rename the data headers
Change all instances of ```title``` and ```uses``` to your preferred names. Labels with spaces need to be wrapped in straight (not smart/curly) quotes, ```'like so'```. If you get an error after changing the name but it's one without spaces in it then you probably used some special Javascript word or something; try putting it in quotes.

### To only copy specific fields
Find the parts of the code that start with ```artoo.scrape('#include_``` and end with ```});```. After each part that starts with ```#include_``` there will be a longer bit following it that elaborates upon which filter category it targets, such as ```#include_rating_tags```. Find the category you don't want data on and delete this section. The full list of categories is as follows:
```#include_rating_tags```, ```#include_archive_warning_tags```, ```#include_category_tags```, ```#include_fandom_tags```, ```#include_character_tags```, ```#include_relationship_tags```, ```#include_freeform_tags```.

### To save in a format other than .csv
Replace ```artoo.saveCsv``` with your preferred data format, such as ```artoo.saveJson```. [More information on this here.](https://medialab.github.io/artoo/save/)

## Known issues
1. I'm not sure how to change the title of the file even thought artoo.js does provide ways to do that.
