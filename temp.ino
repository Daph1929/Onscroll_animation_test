

void setup()
{
	pinMode(13, OUTPUT);

}

void loop()
{
	digitalWrite(13 ,HIGH);
	Serial.begin(9600);
	digitalWrite(13, HIGH);
	analogWrite(13, hh);
	Serial.begin(9600);
	
}