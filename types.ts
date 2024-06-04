// Define the structure for field options
type FieldOption = {
    text: string;
    value: string;
  };
  
  // Define the structure for a question
  type Question = {
    text: string;
    fieldType: 'RADIO_GROUP' | 'SELECT' | 'INPUT' | 'TEXTAREA' | 'SWITCH'; // Assuming these are your enum values in Prisma
    fieldOptions?: FieldOption[]; // This is an optional array of FieldOption
  };
  
  // Define the structure for the form response
  type FormResponse = {
    name: string;
    description: string;
    questions: Question[]; // Array of Question objects
  };