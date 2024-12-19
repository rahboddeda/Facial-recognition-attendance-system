import mysql.connector

mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="123456",
    database="data",
    auth_plugin='mysql_native_password'
)
f=open('roll.txt','r')
t=f.read()
f.close()

cursor = mydb.cursor()
cursor.execute("SELECT * FROM sdata WHERE Rollno=%s",(t,))
res=cursor.fetchall()

fi=open("rln.txt",'w')
result = [list(t) for t in res]
for sublist in result:
        s=str(sublist)
        s=s[1:]
        s=s[:-1]
        fi.write(s + '\n')


#print(res)
cursor.close()
mydb.close()

