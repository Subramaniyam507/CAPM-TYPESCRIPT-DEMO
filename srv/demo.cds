
using {Books,Addresses} from '../db/schema';


service DemoService{
entity BooksSet as projection on Books;
entity AddressesSet  as projection on Addresses;
function sayHello() returns String;
}