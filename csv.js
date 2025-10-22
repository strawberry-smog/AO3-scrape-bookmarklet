var scrapeAO3 = artoo.scrape(
    ':is(#include_rating_tags, #include_archive_warning_tags, #include_category_tags, #include_fandom_tags, #include_character_tags, #include_relationship_tags, #include_freeform_tags) span:not(.indicator)',
    {
      'title': { method: function() {
        return $(this).text().replace(/\s+\(\d+\)$/gmi, '');
      }
    },
      'uses': { method: function() {
        return $(this).text().replace(/.+(?=\(\d+\)$)/gmi, '');
      }
    },
    'title': { method: function() {
        return $(this).text().replace(/\s+\(\d+\)$/gmi, '');
      }
    },
      'uses': { method: function() {
        return $(this).text().replace(/.+(?=\(\d+\)$)/gmi, '');
      }
    }
    }, artoo.saveCsv);