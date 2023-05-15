export interface InputType {
   initialValue?: string;
   validate?: (value: string) => string | undefined;
}
