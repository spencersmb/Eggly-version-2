angular.module('hero.filters', [])
    .filter('heroesFilter', function() {

       return function(items, filters){

           var filtered = [];

           angular.forEach(items, function (item) {

               var lowerCase = filters.query.toLowerCase();
               //console.log('lowercase '+lowerCase);
               var searched = item.name.toLowerCase(filters.query);
               //console.log(' Searched '+searched);

               //simple way to say true for matchText

               //console.log('query' + filters.search);
               var matchText = lowerCase == "" || searched.indexOf(lowerCase) > -1;
               var selectedTags = 0;
               var tagsMatched = 0;
               //console.log('matchText = ' + matchText);
               //console.log('item name: ' + item.name);

               angular.forEach(filters.tags, function (tag) {
                   //if a tag is selected is true
                   if (tag.selected) {
                       //add one to keep track of selected tags
                       selectedTags += 1;

                       //console.log('item tag = ' + item.tags.indexOf(tag.label));
                       //console.log('item tag = ' + item.tags);

                       //loop through each item.tags and if the idexOf that tag == tag.selected label
                       //then tags matched is true for that item
                       if (item.tags.indexOf(tag.label) > -1) {
                           tagsMatched += 1;
                           //console.log('matched = '+ tagsMatched);
                       }
                   }
                   //console.log(selectedTags);
               });

           //if selected tags == 0 then false and nothing gets pushed below
           var matchAnyTag = selectedTags == 0 || tagsMatched > 0;

           //if is true meaning tags matched = 1 for the item then push the item to the new array
           if (matchAnyTag && matchText) {
               //console.log('match in IF = '+ matchText + matchAnyTag);
               filtered.push(item);
               //console.log(filtered);
           }

           });

           return filtered;
       }
    });

