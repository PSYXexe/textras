# Textras

Textras is a Node package which allows you to use some more cool text features as Prototypes!
## Installation

Use [npm](https://www.npmjs.com/) to install Textras.

```bash
npm install textras
```

## Usage

```node
require('textras');

const string = "hello world";

string.wordCap()     //===> "Hello World"
string.remove(3)     //===> "helo world"
string.italic()      //===> "𝘩𝘦𝘭𝘭𝘰 𝘸𝘰𝘳𝘭𝘥"
string.bold()        //===> "𝗵𝗲𝗹𝗹𝗼 𝘄𝗼𝗿𝗹𝗱"
string.separate('-') //===> "h-e-l-l-o-w-o-r-l-d"
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[ISC](https://choosealicense.com/licenses/isc/)
