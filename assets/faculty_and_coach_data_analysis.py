import pandas as pd
import matplotlib.pyplot as plt
import altair as alt

# Load the data
coach_faculty_df = pd.read_csv("data/coach_vs_faculty.csv")

# Clean data
coach_faculty_df.head()
coach_faculty_df.drop(columns=["Unnamed: 0"], inplace=True)
print(coach_faculty_df.head(30))

# Get DFs for each 

chart = alt.Chart(coach_faculty_df).mark_line().encode(
    x=alt.X('YEAR:O', title='Year'),
    y=alt.Y('max(ANNUAL_RATE):Q', title='Annual Rate'),
    color='Job:N',
    column='Job:N',
    row='DEPARTMENT_LOCATION_ZIP_CODE:N'
).properties(
    title="Coach vs Faculty"
)

print(chart)