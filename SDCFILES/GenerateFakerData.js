const faker = require('faker');
const fs = require('fs');

//set the header
var header = 'id, name, slogan, description, category, default_price \n';

//create the dummy data
var createFakeProduct = (num) => {
  var string = '';
  for (var i = 0; i < num; i++) {
    string += faker.fake(
      `${i +
        60}, "{{commerce.productName}}", "{{lorem.sentence}}", "{{lorem.paragraph}}", "{{commerce.product}}", {{random.number(400)}} \n`,
    );
  }
  return string;
};

//write the dummy data to the .csv file

try {
  fs.appendFileSync('./sample1.csv', header + createFakeProduct(10));
  console.log('The data was appended to file!');
} catch (err) {
  console.log('error writing the files');
}

// id, name, slogan, description, category, default_price
// 1,"Camo Onesie","Blend in to your crowd","The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.","Jackets", 140

// "Small Frozen Hat", "Aut rerum consequuntur quae tempora quaerat veniam amet.", "Accusantium qui odit molestias omnis doloremque veritatis consectetur veritatis velit. Suscipit architecto expedita quibusdam quo eaque. Alias quaerat ea. Omnis facilis autem praesentium veritatis. Sapiente ipsam enim. Praesentium iusto deleniti quia iusto aut reprehenderit vel fugiat.", "Pizza", 95

// "Handcrafted Metal Bike", "Quae deserunt culpa corrupti autem porro et molestias.", "Ut mollitia modi eos laboriosam et tenetur modi. Necessitatibus distinctio dolorum iure maiores quibusdam. Iure
//  et dolores. Fugiat quidem fuga quidem. Qui aut repellat non fuga eos debitis eaque sed numquam.", "Bike", 101
