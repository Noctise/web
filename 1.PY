#coding=utf-8
import random
while True:
    letterNum=random.randint(5,20)
    letters=[]
    letterStr=""
    for x in xrange(letterNum):
      num=random.randint(65,122)
      while num>=91 and num<=96:  #屏蔽非字母
           num=random.randint(65,122)
      letters.append(chr(num))
    letterStr="".join(letters)#列表转换为字符串
    print ("请输入以下",letterNum,"位的字符串",letterStr)
    user_input=raw_input("请输入：")
    if len(user_input)>letterNum:
      print "输入数据有误"
    else:
      rightNum=0
      for z in xrange(len(user_input)):
           if user_input[z]==letterStr[z]:
               rightNum+=1
      if rightNum==letterNum:
          print ("完全正确，正确率%.2f%%"%((rightNum*1.0)/letterNum*100))
      else:
          print ("正确率%.2f%%"%((rightNum*1.0)/letterNum*100))