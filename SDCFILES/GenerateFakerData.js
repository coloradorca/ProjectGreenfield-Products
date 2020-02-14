const faker = require('faker');
const fs = require('fs');

var createFakeProduct = (num) => {
  for (var i = 0; i < num; i++) {
    return faker.fake(
      `"{{commerce.productName}}", "{{lorem.sentence}}", "{{lorem.paragraph}}", "{{commerce.product}}", {{random.number(400)}}`,
    );
  }
};

// fs.writeFile('./' + 'sample1.csv', createFakeProduct, 'ascii', (err) => {
//   if (err) throw err;
//   console.log('Entry saved!');
// });

var wstream = fs.createWriteStream('./sample1.csv');

wstream.on('finish', function() {
  console.log('file has been written');
});

wstream.write(createFakeProduct(10));

wstream.end();

// id, name, slogan, description, category, default_price
// 1,"Camo Onesie","Blend in to your crowd","The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.","Jackets", 140

// "Small Frozen Hat", "Aut rerum consequuntur quae tempora quaerat veniam amet.", "Accusantium qui odit molestias omnis doloremque veritatis consectetur veritatis velit. Suscipit architecto expedita quibusdam quo eaque. Alias quaerat ea. Omnis facilis autem praesentium veritatis. Sapiente ipsam enim. Praesentium iusto deleniti quia iusto aut reprehenderit vel fugiat.", "Pizza", 95

// "Handcrafted Metal Bike", "Quae deserunt culpa corrupti autem porro et molestias.", "Ut mollitia modi eos laboriosam et tenetur modi. Necessitatibus distinctio dolorum iure maiores quibusdam. Iure
//  et dolores. Fugiat quidem fuga quidem. Qui aut repellat non fuga eos debitis eaque sed numquam.", "Bike", 101
