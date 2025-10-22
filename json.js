artoo.scrape('#work-filters', {
    'rating name': {
      scrape: {
        iterator: '#include_rating_tags span:not(.indicator)',
        data: function() {
          return $(this).text().replace(/\s+\(\d+\)/gmi, '')
      }
    }},
    'rating uses': {
        scrape: {
          iterator: '#include_rating_tags span:not(.indicator)',
          data: function() {
            return $(this).text().replace(/\D+/gmi, '')
      }
    }},
    'warning name': {
      scrape: {
        iterator: '#include_archive_warning_tags span:not(.indicator)',
        data: function() {
          return $(this).text().replace(/\s+\(\d+\)/gmi, '')
      }
    }},
    'warning uses': {
        scrape: {
          iterator: '#include_archive_warning_tags span:not(.indicator)',
          data: function() {
            return $(this).text().replace(/\D+/gmi, '')
      }
    }},
    'category name': {
      scrape: {
        iterator: '#include_category_tags span:not(.indicator)',
        data: function() {
          return $(this).text().replace(/\s+\(\d+\)/gmi, '')
      }
    }},
    'category uses': {
        scrape: {
          iterator: '#include_category_tags span:not(.indicator)',
          data: function() {
            return $(this).text().replace(/\D+/gmi, '')
      }
    }},
    'fandom name': {
      scrape: {
        iterator: '#include_fandom_tags span:not(.indicator)',
        data: function() {
          return $(this).text().replace(/\s+\(\d+\)/gmi, '')
      }
    }},
    'fandom uses': {
        scrape: {
          iterator: '#include_fandom_tags span:not(.indicator)',
          data: function() {
            return $(this).text().replace(/\D+/gmi, '')
      }
    }},
    'character name': {
      scrape: {
        iterator: '#include_character_tags span:not(.indicator)',
        data: function() {
          return $(this).text().replace(/\s+\(\d+\)/gmi, '')
      }
    }},
    'character uses': {
        scrape: {
          iterator: '#include_character_tags span:not(.indicator)',
          data: function() {
            return $(this).text().replace(/\D+/gmi, '')
      }
    }},
    'relationship name': {
      scrape: {
        iterator: '#include_relationship_tags span:not(.indicator)',
        data: function() {
          return $(this).text().replace(/\s+\(\d+\)/gmi, '')
      }
    }},
    'relationship uses': {
        scrape: {
          iterator: '#include_relationship_tags span:not(.indicator)',
          data: function() {
            return $(this).text().replace(/\D+/gmi, '')
      }
    }},
    'freeform name': {
      scrape: {
        iterator: '#include_freeform_tags span:not(.indicator)',
        data: function() {
          return $(this).text().replace(/\s+\(\d+\)/gmi, '')
      }
    }},
    'freeform uses': {
        scrape: {
          iterator: '#include_freeform_tags span:not(.indicator)',
          data: function() {
            return $(this).text().replace(/\D+/gmi, '')
      }
    }},
    }, artoo.savePrettyJson);