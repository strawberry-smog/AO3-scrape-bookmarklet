# AO3-scrape-bookmarklet
Scrape filter information from an AO3 tag page using artoo.js and export it as a .csv. Created with the [artoo.js bookmarklet generator](https://medialab.github.io/artoo/generator/).

> [!Important]
> I have only tested this on Firefox. I also don't know anything about Javascript so I can't help if you have any problems. This probably doesn't work on mobile.

## How to install
1. Drag the image below to your bookmark toolbar or create a new bookmark with the name "AO3 Scrape" (or whichever name you like!) and copy the code from this repository's bookmarklet.js file into its URL field.
[![ao3 scrape bookmarklet](https://file.garden/ZRhVHzvANRar6hNj/artoo-icon.svg)](javascript: (function(t){var e={eval:'"var scrapeAO3=artoo.scrape(\\":is(#include_rating_tags,%20#include_archive_warning_tags,%20#include_category_tags,%20#include_fandom_tags,%20#include_character_tags,%20#include_relationship_tags,%20#include_freeform_tags)%20span:not(.indicator)\\",{title:{method:function(){return%20$(this).text().replace(/\\\\s+\\\\(\\\\d+\\\\)$/gim,\\"\\")}},uses:{method:function(){return%20$(this).text().replace(/.+(?=\\\\(\\\\d+\\\\)$)|\\\\D/gim,\\"\\")}},title:{method:function(){return%20$(this).text().replace(/\\\\s+\\\\(\\\\d+\\\\)$/gim,\\"\\")}},uses:{method:function(){return%20$(this).text().replace(/.+(?=\\\\(\\\\d+\\\\)$)|\\\\D/gim,\\"\\")}}},artoo.saveCsv);"'},i=!0;if("object"==typeof%20this.artoo&&(artoo.settings.reload||(artoo.log.verbose("artoo%20already%20exists%20within%20this%20page.%20No%20need%20to%20inject%20him%20again."),artoo.loadSettings(e),artoo.exec(),i=!1)),i){var%20a=document.getElementsByTagName("body")[0];a||(a=document.createElement("body"),document.firstChild.appendChild(a));var%20o=document.createElement("script");console.log("artoo.js%20is%20loading..."),o.src="//medialab.github.io/artoo/public/dist/artoo-latest.min.js",o.type="text/javascript",o.id="artoo_injected_script",o.setAttribute("settings",JSON.stringify(e)),a.appendChild(o)}}).call(this);)

## How to use
1. Navigate to the AO3 page you want to get filter information from, ex. https://archiveofourown.org/tags/Scarlet%20Hollow%20(Video%20Game)/works
2. Click on the bookmarklet. If all goes well, it will:
  3. Copy the top ten ratings, warnings, characters, fandoms, relationships, and additional tags, plus how many times each one is used.
  4. Download the results as a .csv to your computer.

## How to customize
Open bookmarklet.js in your preferred code editor, make your desired changes, then save as a new bookmarklet following the installation instructions. Full documentation of how this bookmarklet works can be found on [artoo.js's wiki](https://medialab.github.io/artoo/).

### To rename the data headers
Change all instances of ```title``` and ```uses``` to your preferred names. Labels with spaces need to be wrapped in straight (not smart/curly) quotes, ```'like so'```. If you get an error after changing the name but it's one without spaces in it then you probably used some special Javascript word or something; try putting it in quotes.

### To only copy specific fields
Find the parts of the code that start with ```artoo.scrape('#include_``` and end with ```});```. After each part that starts with ```#include_``` there will be a longer bit following it that elaborates upon which filter category it targets, such as ```#include_rating_tags```. Find the category you don't want data on and delete this section. The full list of categories is as follows:
```qqq```

### To save in a format other than .csv
Replace ```artoo.saveCsv``` with your preferred data format. The full list of categories is as follows:
```qqq```

## Known issues
1. I'm not sure how to change the title of the file even thought artoo.js does provide ways to do that
