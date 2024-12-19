import mysql.connector
import datetime
from md import *

mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="123456",
    database="data",
    auth_plugin='mysql_native_password'
)

# Create cursor object
cursor = mydb.cursor()
current_date = datetime.datetime.now()
current_day_number = current_date.day
current_day_formatted = "day" + str(current_day_number)
print(current_day_formatted)


# Replace names with actual names or fetch them from somewhere
print(names)

roll = []
subject_selected = "DBMS"

for i in range(1, 81):
    if i < 10:
        roll.append("42210" + str(i))
    else:
        roll.append("4221" + str(i))

for roll_number in roll:
    if roll_number in names:
        # mark that particular day as 1 in the database
        cursor.execute("UPDATE sdata SET {} = 1 WHERE Rollno = %s and subject = %s ".format(current_day_formatted), (roll_number,subject_selected))
    else:
        # mark as 0
        cursor.execute("UPDATE sdata SET {} = 0 WHERE Rollno = %s and subject = %s".format(current_day_formatted), (roll_number,subject_selected))

total_classes_query = """
UPDATE sdata 
SET total_classes = 
    (CASE WHEN day1 IN (0, 1) THEN 1 ELSE 0 END) + 
    (CASE WHEN day2 IN (0, 1) THEN 1 ELSE 0 END) + 
    (CASE WHEN day3 IN (0, 1) THEN 1 ELSE 0 END) + 
    (CASE WHEN day4 IN (0, 1) THEN 1 ELSE 0 END) + 
    (CASE WHEN day5 IN (0, 1) THEN 1 ELSE 0 END) + 
    (CASE WHEN day6 IN (0, 1) THEN 1 ELSE 0 END) + 
    (CASE WHEN day7 IN (0, 1) THEN 1 ELSE 0 END) + 
    (CASE WHEN day8 IN (0, 1) THEN 1 ELSE 0 END) + 
    (CASE WHEN day9 IN (0, 1) THEN 1 ELSE 0 END) + 
    (CASE WHEN day10 IN (0, 1) THEN 1 ELSE 0 END) + 
    (CASE WHEN day11 IN (0, 1) THEN 1 ELSE 0 END) + 
    (CASE WHEN day12 IN (0, 1) THEN 1 ELSE 0 END) + 
    (CASE WHEN day13 IN (0, 1) THEN 1 ELSE 0 END) + 
    (CASE WHEN day14 IN (0, 1) THEN 1 ELSE 0 END) + 
    (CASE WHEN day15 IN (0, 1) THEN 1 ELSE 0 END) + 
    (CASE WHEN day16 IN (0, 1) THEN 1 ELSE 0 END) + 
    (CASE WHEN day17 IN (0, 1) THEN 1 ELSE 0 END) + 
    (CASE WHEN day18 IN (0, 1) THEN 1 ELSE 0 END) + 
    (CASE WHEN day19 IN (0, 1) THEN 1 ELSE 0 END) + 
    (CASE WHEN day20 IN (0, 1) THEN 1 ELSE 0 END) + 
    (CASE WHEN day21 IN (0, 1) THEN 1 ELSE 0 END) + 
    (CASE WHEN day22 IN (0, 1) THEN 1 ELSE 0 END) + 
    (CASE WHEN day23 IN (0, 1) THEN 1 ELSE 0 END) + 
    (CASE WHEN day24 IN (0, 1) THEN 1 ELSE 0 END) + 
    (CASE WHEN day25 IN (0, 1) THEN 1 ELSE 0 END) + 
    (CASE WHEN day26 IN (0, 1) THEN 1 ELSE 0 END) + 
    (CASE WHEN day27 IN (0, 1) THEN 1 ELSE 0 END) + 
    (CASE WHEN day28 IN (0, 1) THEN 1 ELSE 0 END) + 
    (CASE WHEN day29 IN (0, 1) THEN 1 ELSE 0 END) + 
    (CASE WHEN day30 IN (0, 1) THEN 1 ELSE 0 END) + 
    (CASE WHEN day31 IN (0, 1) THEN 1 ELSE 0 END)
"""

# UPDATE query for attended_classes
attended_classes_query = """
UPDATE sdata SET attended_classes = 
    (CASE WHEN day1 = 1 THEN 1 ELSE 0 END) + (CASE WHEN day2 = 1 THEN 1 ELSE 0 END) + 
    (CASE WHEN day3 = 1 THEN 1 ELSE 0 END) + (CASE WHEN day4 = 1 THEN 1 ELSE 0 END) + 
    (CASE WHEN day5 = 1 THEN 1 ELSE 0 END) + (CASE WHEN day6 = 1 THEN 1 ELSE 0 END) + 
    (CASE WHEN day7 = 1 THEN 1 ELSE 0 END) + (CASE WHEN day8 = 1 THEN 1 ELSE 0 END) + 
    (CASE WHEN day9 = 1 THEN 1 ELSE 0 END) + (CASE WHEN day10 = 1 THEN 1 ELSE 0 END) + 
    (CASE WHEN day11 = 1 THEN 1 ELSE 0 END) + (CASE WHEN day12 = 1 THEN 1 ELSE 0 END) + 
    (CASE WHEN day13 = 1 THEN 1 ELSE 0 END) + (CASE WHEN day14 = 1 THEN 1 ELSE 0 END) + 
    (CASE WHEN day15 = 1 THEN 1 ELSE 0 END) + (CASE WHEN day16 = 1 THEN 1 ELSE 0 END) + 
    (CASE WHEN day17 = 1 THEN 1 ELSE 0 END) + (CASE WHEN day18 = 1 THEN 1 ELSE 0 END) + 
    (CASE WHEN day19 = 1 THEN 1 ELSE 0 END) + (CASE WHEN day20 = 1 THEN 1 ELSE 0 END) + 
    (CASE WHEN day21 = 1 THEN 1 ELSE 0 END) + (CASE WHEN day22 = 1 THEN 1 ELSE 0 END) + 
    (CASE WHEN day23 = 1 THEN 1 ELSE 0 END) + (CASE WHEN day24 = 1 THEN 1 ELSE 0 END) + 
    (CASE WHEN day25 = 1 THEN 1 ELSE 0 END) + (CASE WHEN day26 = 1 THEN 1 ELSE 0 END) + 
    (CASE WHEN day27 = 1 THEN 1 ELSE 0 END) + (CASE WHEN day28 = 1 THEN 1 ELSE 0 END) + 
    (CASE WHEN day29 = 1 THEN 1 ELSE 0 END) + (CASE WHEN day30 = 1 THEN 1 ELSE 0 END) + 
    (CASE WHEN day31 = 1 THEN 1 ELSE 0 END)
"""

# UPDATE query for subject
# subject_query = """
# UPDATE sdata SET subject ="DBMS" where Rollno = 422121
# """

# UPDATE query for percentage
percentage_query = """
UPDATE sdata SET percentage = 
    CASE 
        WHEN total_classes > 0 THEN (100.0 * attended_classes / total_classes)
        ELSE 0
    END
"""

# Execute the queries
cursor.execute(total_classes_query)
cursor.execute(attended_classes_query)
#cursor.execute(subject_query)
cursor.execute(percentage_query)

# Commit changes
mydb.commit()

# Fetch all tables
cursor.execute("SELECT * FROM sdata order by Rollno")
result = cursor.fetchall()

f=open("op.txt",'w')
k=open("rln.txt",'w')
result = [list(t) for t in result]
for sublist in result:
        s=str(sublist)
        s=s[1:]
        s=s[:-1]
        f.write(s + '\n')
        k.write(s + '\n')


print(result)

# for row in result:
#     print(row)

# Close cursor and connection
cursor.close()
mydb.close()
