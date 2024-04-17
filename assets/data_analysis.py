import pandas as pd
import matplotlib.pyplot as plt
import altair as alt

# Load the data
faculty_df = pd.read_csv("data/combined_with_departments.csv")

# Clean data
faculty_df.head()
faculty_df.drop(columns=["Unnamed: 0.1", "Unnamed: 0"], inplace=True)

# Get the number of position per position title
position_title_counts = faculty_df["POSITION_TITLE"].value_counts()
print(position_title_counts)

# Filter faculty_df to have certain position titles
titles = ["Associate Lecturer", "Associate Professor", "Assoc Lecturer A", "Assistant Professor", "Lecturer", "Professor", "Senior Lecturer", "Senior Lecturer II", "Senior Lecturer III", 
          "Clinical Associate Lecturer", "Clinical Associate Lecturer A", "Grad Prog Dir/Assoc Professor", "Grad Prog Dir/Professor"]

# Get the annual rate for ratings above 3
avg_num_ratings = 1
print(avg_num_ratings)

rating_above_3 = faculty_df["RATING"] >= 3
num_ratings_above_avg = faculty_df["NUM_RATINGS"] >= int(avg_num_ratings)
faculty_df_above_3_and_above_num_ratings_df = faculty_df[rating_above_3 & num_ratings_above_avg]
position_title_counts_above_3_and_above_num_ratings = faculty_df_above_3_and_above_num_ratings_df["POSITION_TITLE"].value_counts()
print(position_title_counts_above_3_and_above_num_ratings)
print(faculty_df_above_3_and_above_num_ratings_df[["POSITION_TITLE", "ANNUAL_RATE", "DEPARTMENT"]].head(30).sort_values(by="ANNUAL_RATE", ascending=False))

rating_below_3 = faculty_df["RATING"] < 3
faculty_df_below_3_and_above_num_ratings_df = faculty_df[rating_below_3 & num_ratings_above_avg]
position_title_counts_below_3_and_above_num_ratings = faculty_df_below_3_and_above_num_ratings_df["POSITION_TITLE"].value_counts()
print(position_title_counts_below_3_and_above_num_ratings)
print(faculty_df_below_3_and_above_num_ratings_df[["POSITION_TITLE", "ANNUAL_RATE", "DEPARTMENT"]].head(30).sort_values(by="ANNUAL_RATE", ascending=False))

# Function to get faculty above rating of 3 and above the average number 
# of ratings for specific departments
def get_faculty_above_3_rating_by_departments(departments):
    return faculty_df_above_3_and_above_num_ratings_df[faculty_df_above_3_and_above_num_ratings_df["DEPARTMENT"].isin(departments)]

# Function to get faculty below rating of 3 and above the average number 
# of ratings for specific departments
def get_faculty_below_3_rating_by_departments(departments):
    return faculty_df_below_3_and_above_num_ratings_df[faculty_df_below_3_and_above_num_ratings_df["DEPARTMENT"].isin(departments)]

# Plot the average annual rate by department
def plot_average_annual_rate_by_department(department_df):
    plt.figure(figsize=(10, 12))
    department_df.plot(kind="bar")
    plt.title("Average Annual Rate by Department")
    plt.xlabel("Department")
    plt.ylabel("Average Annual Rate")
    plt.xticks(rotation=90)
    plt.show()

# Filter the departments that are not in the other one
def filter_departments(departments, other_departments):
    return departments[~departments.isin(other_departments)]

management_departments = ["Management Science & Information Systems", "Management", "Accounting & Finance"]
nursing_departments = ["Nursing", "Exercise & Health Science", "Urban Public Health"]
environment_departments = ["Urban Planning & Community Development", "Urban Public Health"]
education_departments = ["Counseling & School Psychology", "Curriculum & Instruction"]
cla_departments = ["Performing Arts", "English", "Psychology", "Communications", "American Studies", "Classics & Religious Studies",
                   "Anthropology", "Applied Linguistics", "Latin American & Iberian Studies", "Modern Languages Lit", "Art", "Economics", "Sociology", "Africana Studies", "History",
                   "Philosophy", "Asian Studies"]
csm_deparments = ["Computer Science", "Engineering", "Physics", "Mathematics", "Biology", "Chemistry"]

# Get faculty above 3 rating by departments
management_above_3 = get_faculty_above_3_rating_by_departments(management_departments)
nursing_above_3 = get_faculty_above_3_rating_by_departments(nursing_departments)
environment_above_3 = get_faculty_above_3_rating_by_departments(environment_departments)
education_above_3 = get_faculty_above_3_rating_by_departments(education_departments)
cla_above_3 = get_faculty_above_3_rating_by_departments(cla_departments)
csm_above_3 = get_faculty_above_3_rating_by_departments(csm_deparments)

# Get faculty below 3 rating by departments
management_below_3 = get_faculty_below_3_rating_by_departments(management_departments)
nursing_below_3 = get_faculty_below_3_rating_by_departments(nursing_departments)
environment_below_3 = get_faculty_below_3_rating_by_departments(environment_departments)
education_below_3 = get_faculty_below_3_rating_by_departments(education_departments)
cla_below_3 = get_faculty_below_3_rating_by_departments(cla_departments)
csm_below_3 = get_faculty_below_3_rating_by_departments(csm_deparments)

filtered_education_departments = filter_departments(education_above_3, education_below_3)

# Plot the average annual rate by department
# plot_average_annual_rate_by_department(management_above_3.groupby("DEPARTMENT")["ANNUAL_RATE"].mean())
# plot_average_annual_rate_by_department(management_below_3.groupby("DEPARTMENT")["ANNUAL_RATE"].mean())

# plot_average_annual_rate_by_department(nursing_above_3.groupby("DEPARTMENT")["ANNUAL_RATE"].mean())
# plot_average_annual_rate_by_department(nursing_below_3.groupby("DEPARTMENT")["ANNUAL_RATE"].mean())

# plot_average_annual_rate_by_department(environment_above_3.groupby("DEPARTMENT")["ANNUAL_RATE"].mean())
# plot_average_annual_rate_by_department(environment_below_3.groupby("DEPARTMENT")["ANNUAL_RATE"].mean())

# plot_average_annual_rate_by_department(education_above_3.groupby("DEPARTMENT")["ANNUAL_RATE"].mean())
# plot_average_annual_rate_by_department(education_below_3.groupby("DEPARTMENT")["ANNUAL_RATE"].mean())

# plot_average_annual_rate_by_department(cla_above_3.groupby("DEPARTMENT")["ANNUAL_RATE"].mean())
# plot_average_annual_rate_by_department(cla_below_3.groupby("DEPARTMENT")["ANNUAL_RATE"].mean())

chart = alt.Chart(cla_below_3).mark_bar().encode(
    x='DEPARTMENT',
    y='mean(ANNUAL_RATE)',
)
print(chart.to_json())

# Aggregate bar chart


# plot_average_annual_rate_by_department(csm_above_3.groupby("DEPARTMENT")["ANNUAL_RATE"].mean())
# plot_average_annual_rate_by_department(csm_below_3.groupby("DEPARTMENT")["ANNUAL_RATE"].mean())
