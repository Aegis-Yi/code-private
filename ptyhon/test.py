import itchat, time
from itchat.content import *
from json import JSONDecoder
import json
import requests
itchat.auto_login()
key = "OuhbjADYDwXQLZmGTcXUCDJ2oFLY5SuE"
secret = "5dsMMVOxdRAEC3YA4tTNZni1W0CtFJnR"

def dictget(dict1,obj,):
     for k,v in dict1.items():
        if k == obj:
            v
        else:
            break
        return v

@itchat.msg_register([PICTURE])
def download_files(msg):
    msg.download(msg.fileName)
    msg["Text"](msg["FileName"])
    http_url = "https://api-cn.faceplusplus.com/facepp/v3/detect"
    data = {"api_key": key, "api_secret": secret, "return_attributes": "beauty", }
    filepath1 = msg["FileName"]
    files = {"image_file": open(filepath1, "rb")}
    response = requests.post(http_url, data=data, files=files)
    req_con = response.content.decode('utf-8')
    req_dict = JSONDecoder().decode(req_con)
    result=req_dict['faces'][0]
    attribute = dictget(result, "attributes")
    beauty=dictget(attribute,"beauty")
    avg = (beauty['male_score'] + beauty['female_score']) / 2
    itchat.send(r"你的颜值在男性中为:%s，在女性中为%s，平均分为%s。--微信助手(Python版)" % (beauty['male_score'], beauty['female_score'],avg),toUserName=msg['FromUserName'])
  
itchat.run()