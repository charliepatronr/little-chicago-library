class AddDefaultValueToBookLogs < ActiveRecord::Migration[6.0]
  def change
    change_column :book_logs, :available, :boolean, :default => true
    change_column :book_logs, :adopted, :boolean, :default => false
  end
end
