#抓取微信好友性别并绘图
import matplotlib.pyplot as plt #pip install matplotlib
import itchat
def getSex():
    itchat.login()
    friends = itchat.get_friends(update=True)
    sex = dict()
    for f in friends:
        if f["Sex"] == 1:
            sex["mam"] = sex.get("man", 0) + 1
        elif f["Sex"] == 2:
            sex["woman"] = sex.get("woman", 0) + 1
        else:
            sex["unknown"] = sex.get("unknown", 0) + 1

    for i, key in enumerate(sex):
        plt.bar(key, sex[key])
    plt.show()
getSex()
