from pypresence import Presence
import config
import time


clientID = config.ClientID # Your application id
RPC = Presence(clientID())
RPC.connect()
print('RPC is now running!') # Prints this message when the rpc is runnuing successfully

while True:
    RPC.update(large_image="Large Image", # 
                large_text="Large Image Text", # Text that shows when you hover over the large image
                small_image="Small Image", # 
                small_text="Small Image Text", # Text that shows when you hover over the large image
                details="Hello there, stalker!", 
                state="While you're here, check out my GitHub", 
                start=int(time.time()), # Shows the elapsed time
                buttons=[{
                    "label":"Button 1", # Title of button 1
                     "url":"https://github.com/sydyen" # Link of button 1
                     }, {
                    "label":"Button 2", # Title of button 2
                    "url":"https://github.com/sydyen" # Link of button 2
    }])
